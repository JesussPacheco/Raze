import { Component, OnInit } from '@angular/core';
import { OutfitModel} from "../../model/outfit.model";
import {OutfitsServices} from "../../services/outfits.services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-outfits-item',
  templateUrl: './outfits-item.component.html',
  styleUrls: ['./outfits-item.component.css']
})
export class OutfitsItemComponent implements OnInit {

  currentOutfit: OutfitModel = {
    name: '',
    img:'',
    description: '',
  };
  currentUserId=2;

  constructor(private outfitsServices: OutfitsServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.params.id);
    this.routerTry();
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }
  getTutorial(id: string): void {
    this.outfitsServices.get(id)
      .subscribe(
        data => {
          this.currentOutfit = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {

    this.outfitsServices.update(this.currentOutfit.id, this.currentOutfit)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(): void {
    this.outfitsServices.delete(this.currentOutfit.id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
