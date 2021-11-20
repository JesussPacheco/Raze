import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Interest } from 'src/app/components/interest/model/interest.model';
import { InterestService } from 'src/app/components/interest/services/interest.service';

@Component({
  selector: 'app-interests-list',
  templateUrl: './interests-list.component.html',
  styleUrls: ['./interests-list.component.css']
})
export class InterestsListComponent implements OnInit {

  interests?: Interest[];
  currentInterest: Interest = {};
  currentIndex = -1;
  title = '';
  currentUserId=2;

  constructor(private interestService: InterestService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveInterests();
    this.routerTry();
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }

  retrieveInterests(): void {
    this.interestService.getAll()
      .subscribe(
        data => {
          this.interests = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveInterests();
    this.currentInterest = {};
    this.currentIndex = -1;
  }

  setActiveInterest(interest: Interest, index: number): void {
    this.currentInterest = interest;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentInterest = {};
    this.currentIndex = -1;

    this.interestService.findByTitle(this.title)
      .subscribe(
        data => {
          this.interests = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
