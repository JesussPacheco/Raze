import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../model/post.model";
import {PostsServices} from "../../services/posts.services";
import {User} from "../../../security/model/user.model";
import {UserService} from "../../../security/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

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
  currentUser: User = {};
  constructor(private route: ActivatedRoute, private router: Router, private postsServices:PostsServices, private userService:UserService) {  }

  ngOnInit(): void {
    this.retrievePosts();
    this.retrieveUser();
  }

  retrieveUser(): void{
    this.userService.get(this.route.snapshot.params.id)
      .subscribe(data => {
        this.currentUser = data;
        console.log('Userid');
        console.log(this.currentUser.id);
      },
        error => {
          console.log(error);
        });
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
}
