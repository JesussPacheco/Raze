import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../model/user.model";
import {UserService} from "../../services/user.service";
import {PostModel} from "../../../posts/model/post.model";
import {PostsServices} from "../../../posts/services/posts.services";
import {UserStorageServices} from "../../services/user-storage.services";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:UserModel={
    id: 0,
    age: 0,
    imgProfile: '',
    name: '',
    username: '',
  };
  posts?:PostModel[];
  currentPost: PostModel = {};
  currentIndex = -1;
  gridColumns = 3;
  images: any[]=[];

  constructor(
    private userService: UserService,
    private postsServices:PostsServices,
    private storageService:UserStorageServices
  ) { }

  ngOnInit(): void {
    this.retrieveUser();
    this.retrievePosts();
  }

  retrieveUser():void{
    this.userService.get(1)
      .subscribe(data=>{
        this.user=data;
        console.log(data);
      },error => {
        console.log(error);
      })
  }

  updateUser():void{
    this.userService.update(this.user.id,this.user)
      .subscribe(data=>{
        console.log(data);
      },error => {
        console.log(error)
      })
  }

  retrievePosts(): void {
    this.postsServices.findByUser(1)
      .subscribe(
        data => {
          this.posts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePosts();
    this.currentPost = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(post: PostModel, index: number): void {
    this.currentPost = post;
    this.currentIndex = index;
  }

  uploadImage(event: any){
    let files = event.target.files;
    let reader = new FileReader()

    reader.readAsDataURL(files[0]);
    reader.onloadend=()=>{

      console.log(reader.result)
      this.images.push(reader.result);
      this.storageService.uploadImage("image"+"_"+Date.now(),reader.result)
        .then(imgUrl=>{
          this.user.imgProfile=imgUrl;
        })
    }
  }

}
