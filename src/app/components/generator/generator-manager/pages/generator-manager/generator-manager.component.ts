import { Component, OnInit } from '@angular/core';
import {OutfitGeneratedModel} from "../../model/outfit-generated.model";
import {OutfitGeneratedServices} from "../../services/outfit-generated.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-generator-manager',
  templateUrl: './generator-manager.component.html',
  styleUrls: ['./generator-manager.component.css']
})
export class GeneratorManagerComponent implements OnInit {

  outfitGenerated: OutfitGeneratedModel={
    topImage:'https://wallpaperaccess.com/full/1668898.jpg',
    bottomImage:'https://wallpaperaccess.com/full/1668898.jpg',
    footWearImage:'https://wallpaperaccess.com/full/1668898.jpg',
    userId:0
  };
  submitted = false;
  currentUserId=2;

  constructor(private outfitGeneratedServices: OutfitGeneratedServices,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerTry();
  }

  saveOutfitGenerated(): void {
    const data = {
      topImage: this.outfitGenerated.topImage,
      bottomImage: this.outfitGenerated.bottomImage,
      footWearImage:  this.outfitGenerated.footWearImage,
      userId: Number(this.currentUserId)
    };

    this.outfitGeneratedServices.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        e => {
          console.log(e);
        });
  }

  newOutfitGenerated(): void {
    this.submitted = false;
    this.outfitGenerated = {
      topImage: 'https://wallpaperaccess.com/full/1668898.jpg',
      bottomImage:'https://wallpaperaccess.com/full/1668898.jpg',
      footWearImage: 'https://wallpaperaccess.com/full/1668898.jpg',
    };
  }

  chooseTop(topImage: string){
    this.outfitGenerated.topImage=topImage;
  }

  chooseBottom(bottomImage: string){
    this.outfitGenerated.bottomImage=bottomImage;
  }

  chooseFootWear(footWearImage: string){
    this.outfitGenerated.footWearImage=footWearImage;
  }

  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }
}
