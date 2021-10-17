import { Component, OnInit } from '@angular/core';
import { Interest } from 'src/app/models/interest.model';
import { InterestService } from 'src/app/assistance/interest.service';

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

  constructor(private interestService: InterestService) { }

  ngOnInit(): void {
    this.retrieveInterests();
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
