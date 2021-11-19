import { Component, OnInit } from '@angular/core';
import {FootWearServices} from "../../services/foot-wear.services";
import {FootWearModel} from "../../model/foot-wear.model";

@Component({
  selector: 'app-generator-foot-wear',
  templateUrl: './generator-foot-wear.component.html',
  styleUrls: ['./generator-foot-wear.component.css']
})
export class GeneratorFootWearComponent implements OnInit {

  footWears?: FootWearModel[];
  currentFootWear: FootWearModel = {};
  currentIndex = -1;
  name = '';
  constructor(private footWearServices: FootWearServices) { }

  ngOnInit(): void {
    this.retrieveFootWears();
  }

  retrieveFootWears(): void {
    this.footWearServices.getAll()
      .subscribe(
        data => {
          this.footWears = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveFootWears();
    this.currentFootWear = {};
    this.currentIndex = -1;
  }

  setActiveFootWear(footWear: FootWearModel, index: number): void {
    this.currentFootWear = footWear;
    this.currentIndex = index;
    this.selectBottom(footWear);
  }

  searchTitle(): void {
    this.currentFootWear = {};
    this.currentIndex = -1;

    this.footWearServices.findByName(this.name)
      .subscribe(
        data => {
          this.footWears = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  selectBottom(footWear: FootWearModel){
    console.log(footWear);
  }

}
