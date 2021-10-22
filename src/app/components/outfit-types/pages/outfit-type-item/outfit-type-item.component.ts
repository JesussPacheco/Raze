import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  gridColumns = 3;

  constructor(private outfitsServices:OutfitsServices,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.retrieveOutfits(this.route.snapshot.params.id)
  }

  retrieveOutfits(type: string): void {
    this.outfitsServices.findType(type)
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
