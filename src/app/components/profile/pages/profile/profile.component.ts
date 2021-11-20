import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../model/user.model";
import {UserService} from "../../services/user.service";
import {PostModel} from "../../../posts/model/post.model";
import {PostsServices} from "../../../posts/services/posts.services";

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

  constructor(private userService: UserService, private postsServices:PostsServices) { }

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

}
