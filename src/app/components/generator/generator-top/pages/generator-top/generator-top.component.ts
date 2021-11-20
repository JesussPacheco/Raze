import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopModel} from "../../model/top.model";
import {TopServices} from "../../services/top.services";

@Component({
  selector: 'app-generator-top',
  templateUrl: './generator-top.component.html',
  styleUrls: ['./generator-top.component.css']
})
export class GeneratorTopComponent implements OnInit {

  tops?: TopModel[];
  currentTop: TopModel = {};
  currentIndex = -1;
  name = '';
  currentUserId=2;

  @Output() chooseTop = new EventEmitter<string>()

  constructor(private topServices: TopServices,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveTops()
    this.routerTry();
  }

  retrieveTops(): void {
    this.topServices.getAll()
      .subscribe(
        data => {
          this.tops = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTops();
    this.currentTop = {};
    this.currentIndex = -1;
  }

  setActiveTop(top: TopModel, index: number): void {
    this.currentTop = top;
    this.currentIndex = index;
    this.selectTop(top);
  }

  searchTitle(): void {
    this.currentTop = {};
    this.currentIndex = -1;

    this.topServices.findByName(this.name)
      .subscribe(
        data => {
          this.tops = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  selectTop(top: TopModel){
    console.log(top);
    this.chooseTop.emit(top.image);
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }
}
