import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FashionModel } from "../../model/fashion.model";
import { FashionsService } from "../../services/fashions.service";

@Component({
  selector: 'app-fashions-list',
  templateUrl: './fashions-list.component.html',
  styleUrls: ['./fashions-list.component.css']
})
export class FashionsListComponent implements OnInit {
  fashions?: FashionModel[];
  currentFashion: FashionModel = {};
  currentIndex = -1;
  name = '';
  currentUserId=2;

  constructor(private fashiontService: FashionsService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveFashions();
    this.routerTry();
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }

  retrieveFashions(): void {
    this.fashiontService.getAll()
      .subscribe(
        data => {
          this.fashions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveFashions();
    this.currentFashion = {};
    this.currentIndex = -1;
  }

  setActiveFashion(fashion: FashionModel, index: number): void {
    this.currentFashion = fashion;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentFashion = {};
    this.currentIndex = -1;

    this.fashiontService.findByTitle(this.name)
      .subscribe(
        data => {
          this.fashions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
