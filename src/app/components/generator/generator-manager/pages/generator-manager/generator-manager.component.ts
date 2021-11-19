import { Component, OnInit } from '@angular/core';
import {OutfitGeneratedModel} from "../../model/outfit-generated.model";
import {OutfitGeneratedServices} from "../../services/outfit-generated.services";

@Component({
  selector: 'app-generator-manager',
  templateUrl: './generator-manager.component.html',
  styleUrls: ['./generator-manager.component.css']
})
export class GeneratorManagerComponent implements OnInit {

  outfitGenerated: OutfitGeneratedModel={
    topImage:'https://wallpaperaccess.com/full/1668898.jpg',
    bottomImage:'https://wallpaperaccess.com/full/1668898.jpg',
    footWearImage:'https://wallpaperaccess.com/full/1668898.jpg'
  };
  submitted = false;

  constructor(private outfitGeneratedServices: OutfitGeneratedServices) { }

  ngOnInit(): void {
  }

  saveOutfitGenerated(): void {
    const data = {
      topImage: this.outfitGenerated.topImage,
      bottomImage: this.outfitGenerated.bottomImage,
      footWearImage:  this.outfitGenerated.footWearImage
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

}
