import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Interest } from 'src/app/components/interest/model/interest.model';
import { InterestService } from 'src/app/components/interest/services/interest.service';

@Component({
  selector: 'app-add-interest',
  templateUrl: './add-interest.component.html',
  styleUrls: ['./add-interest.component.css']
})
export class AddInterestComponent implements OnInit {

  interest: Interest = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  currentUserId=2;

  constructor(private interestService: InterestService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerTry();
  }

  saveInterest(): void {
    const data = {
      title: this.interest.title,
      description: this.interest.description
    };

    this.interestService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newInterest(): void {
    this.submitted = false;
    this.interest = {
      title: '',
      description: '',
      published: false
    };
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }
}
