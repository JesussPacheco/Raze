import { Component, OnInit } from '@angular/core';
import {PostsServices} from "../../services/posts.services";
import {PostModel} from "../../model/post.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  currentPost: PostModel = {
    title: '',
    img:'',
    description: '',
  };
  message = '';

  constructor(private postsServices: PostsServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.params.id);
  }

  getTutorial(id: string): void {
    this.postsServices.get(id)
      .subscribe(
        data => {
          this.currentPost = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.message = '';

    this.postsServices.update(this.currentPost.id, this.currentPost)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.postsServices.delete(this.currentPost.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
}
