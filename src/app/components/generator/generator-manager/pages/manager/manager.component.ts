import { Component, OnInit } from '@angular/core';
import {OutfitGeneratedModel} from "../../model/outfit-generated.model";
import {TopModel} from "../../../generator-top/model/top.model";
import {OutfitGeneratedServices} from "../../services/outfit-generated.services";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  outfitsGenerated?: OutfitGeneratedModel[];
  currentOutfitGenerated: OutfitGeneratedModel = {};
  currentIndex = -1;
  name = '';

  constructor(private outfitGeneratedServices : OutfitGeneratedServices) { }

  ngOnInit(): void {
    this.retrieveOutfitsGenerated();
  }

  retrieveOutfitsGenerated(): void {
    this.outfitGeneratedServices.getAll()
      .subscribe(
        data => {
          this.outfitsGenerated = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveOutfitsGenerated();
    this.currentOutfitGenerated = {};
    this.currentIndex = -1;
  }

  setActiveTop(top: TopModel, index: number): void {
    this.currentOutfitGenerated = top;
    this.currentIndex = index;
    this.selectTop(top);
  }

  searchTitle(): void {
    this.currentOutfitGenerated = {};
    this.currentIndex = -1;

    this.outfitGeneratedServices.findByName(this.name)
      .subscribe(
        data => {
          this.outfitsGenerated = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  selectTop(top: TopModel){
    console.log(top);
  }
}
