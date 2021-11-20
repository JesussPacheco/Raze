import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FashionModel } from "../../model/fashion.model";
import { FashionsService } from "../../services/fashions.service";

@Component({
  selector: 'app-add-fashion',
  templateUrl: './add-fashion.component.html',
  styleUrls: ['./add-fashion.component.css']
})
export class AddFashionComponent implements OnInit {

  fashion: FashionModel = {
    name: ''
  };
  submitted = false;
  currentUserId=2;

  constructor(private fashionService: FashionsService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerTry();
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }

  saveFashion(): void {
    const data = {
      name: this.fashion.name
    };

    this.fashionService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newFashion(): void {
    this.submitted = false;
    this.fashion = {
      name: ''
    };
  }
}
