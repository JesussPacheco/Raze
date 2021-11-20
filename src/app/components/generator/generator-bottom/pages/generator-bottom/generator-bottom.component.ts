import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BottomModel} from "../../model/bottom.model";
import {BottomServices} from "../../services/buttom.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-generator-bottom',
  templateUrl: './generator-bottom.component.html',
  styleUrls: ['./generator-bottom.component.css']
})
export class GeneratorBottomComponent implements OnInit {

  bottoms?: BottomModel[];
  currentBottom: BottomModel = {};
  currentIndex = -1;
  name = '';
  currentUserId=2;

  @Output() chooseBottom = new EventEmitter<string>()

  constructor(private bottomService:BottomServices,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveBottoms();
    this.routerTry();
  }

  retrieveBottoms(): void {
    this.bottomService.getAll()
      .subscribe(
        data => {
          this.bottoms = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveBottoms();
    this.currentBottom = {};
    this.currentIndex = -1;
  }

  setActiveBottom(bottom: BottomModel, index: number): void {
    this.currentBottom = bottom;
    this.currentIndex = index;
    this.selectBottom(bottom);
  }

  searchTitle(): void {
    this.currentBottom = {};
    this.currentIndex = -1;

    this.bottomService.findByName(this.name)
      .subscribe(
        data => {
          this.bottoms = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  selectBottom(bottom: BottomModel){
    console.log(bottom);
    this.chooseBottom.emit(bottom.image)
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }
}
