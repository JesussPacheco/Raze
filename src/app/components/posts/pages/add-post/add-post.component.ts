import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostModel} from "../../model/post.model";
import {PostsServices} from "../../services/posts.services";
import {OutfitModel} from "../../../outfits/model/outfit.model";
import {OutfitsServices} from "../../../outfits/services/outfits.services";
import {StorageServices} from "../../services/storage.services";


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: PostModel = {
    title: '',
    img:'',
    description: '',
    userId:0,
  };
  submitted = false;
  outfits?: OutfitModel[];
  images: any[]=[];
  currentUserId=2;

  constructor(private postServices:PostsServices, private outfitServices:OutfitsServices,
              private  storageService: StorageServices,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveOutfit();
    this.routerTry();
  }

  retrieveOutfit() : void {
    this.outfitServices.getAll()
      .subscribe(
        data => {
          this.outfits = data;
          console.log('Outfits: ', data);
        },
        error => {
          console.log(error);
        });
  }

  saveTutorial(): void {
    const data = {
      title: this.post.title,
      img:this.post.img,
      description: this.post.description,
      userId: Number(this.currentUserId)
    };

    this.postServices.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        e => {
          console.log(e);
        });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      title: '',
      img:'',
      description: '',
    };
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
          this.post.img=imgUrl;
        })
    }
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }
}
