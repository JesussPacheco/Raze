import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../model/post.model";
import {PostsServices} from "../../services/posts.services";

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

  constructor(private postServices:PostsServices) { }

  ngOnInit(): void {
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
