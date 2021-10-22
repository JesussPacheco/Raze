import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../model/post.model";
import {PostsServices} from "../../services/posts.services";
import {OutfitModel} from "../../../outfits/model/outfit.model";
import {OutfitsServices} from "../../../outfits/services/outfits.services";

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
  };
  submitted = false;
  outfits?: OutfitModel[]

  constructor(private postServices:PostsServices, private outfitServices:OutfitsServices) { }

  ngOnInit(): void {
    this.retrieveOutfit();
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
      description: this.post.description
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
}
