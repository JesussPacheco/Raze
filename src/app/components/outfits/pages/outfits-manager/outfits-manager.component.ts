import { Component, OnInit } from '@angular/core';
import {OutfitModel} from "../../model/outfit.model";
import {OutfitsServices} from "../../services/outfits.services";

@Component({
  selector: 'app-outfits-manager',
  templateUrl: './outfits-manager.component.html',
  styleUrls: ['./outfits-manager.component.css']
})
export class OutfitsManagerComponent implements OnInit {

  outfits?: OutfitModel[];
  currentOutfit: OutfitModel = {};
  currentIndex = -1;
  name = '';

  constructor(private outfitsServices:OutfitsServices) { }

  ngOnInit(): void {
    this.retrieveOutfits()
  }
  retrieveOutfits(): void {
    this.outfitsServices.getAll()
      .subscribe(
        data => {
          this.outfits = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveOutfits();
    this.currentOutfit = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(post: OutfitModel, index: number): void {
    this.currentOutfit = post;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentOutfit = {};
    this.currentIndex = -1;

    this.outfitsServices.findByName(this.name)
      .subscribe(
        data => {
          this.outfits = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
