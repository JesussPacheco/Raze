import { Component, OnInit } from '@angular/core';
import { InterestService } from 'src/app/components/interest/services/interest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Interest } from 'src/app/components/interest/model/interest.model';

@Component({
  selector: 'app-interest-feature',
  templateUrl: './interest-feature.component.html',
  styleUrls: ['./interest-feature.component.css']
})
export class InterestFeatureComponent implements OnInit {

  currentInterest: Interest = {
    title: '',
    description: '',
    published: false
  };
  message = '';
  currentUserId=2;

  constructor(
    private interestService: InterestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getInterest(this.route.snapshot.params.id);
    this.routerTry();
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }

  getInterest(id: string): void {
    this.interestService.get(id)
      .subscribe(
        data => {
          this.currentInterest = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentInterest.title,
      description: this.currentInterest.description,
      published: status
    };

    this.message = '';

    this.interestService.update(this.currentInterest.id, data)
      .subscribe(
        response => {
          this.currentInterest.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateInterest(): void {
    this.message = '';

    this.interestService.update(this.currentInterest.id, this.currentInterest)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This interest was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteInterest(): void {
    this.interestService.delete(this.currentInterest.id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
