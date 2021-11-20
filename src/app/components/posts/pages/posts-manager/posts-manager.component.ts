import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../model/post.model";
import {PostsServices} from "../../services/posts.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts-manager',
  templateUrl: './posts-manager.component.html',
  styleUrls: ['./posts-manager.component.css']
})
export class PostsManagerComponent implements OnInit {

  posts?: PostModel[];
  currentPost: PostModel = {};
  currentIndex = -1;
  title = '';
  gridColumns = 3;
  constructor(private postsServices:PostsServices,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrievePosts()
    this.routerTry();
  }

  retrievePosts(): void {
    this.postsServices.getAll()
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

  searchTitle(): void {
    this.currentPost = {};
    this.currentIndex = -1;

    this.postsServices.findByTitle(this.title)
      .subscribe(
        data => {
          this.posts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  routerTry(){
    console.log(this.route.snapshot.params['userId']);
  }
}
