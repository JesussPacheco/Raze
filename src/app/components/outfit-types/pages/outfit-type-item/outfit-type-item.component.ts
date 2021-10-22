import { Component, OnInit } from '@angular/core';
import {OutfitModel} from "../../../outfits/model/outfit.model";
import {OutfitsServices} from "../../../outfits/services/outfits.services";


@Component({
  selector: 'app-outfit-type-item',
  templateUrl: './outfit-type-item.component.html',
  styleUrls: ['./outfit-type-item.component.css']
})
export class OutfitTypeItemComponent implements OnInit {
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
}
