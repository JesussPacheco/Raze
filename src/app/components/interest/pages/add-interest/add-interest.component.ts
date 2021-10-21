import { Component, OnInit } from '@angular/core';
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

  constructor(private interestService: InterestService) { }

  ngOnInit(): void {
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
}
