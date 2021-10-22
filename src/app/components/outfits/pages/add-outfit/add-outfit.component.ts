import { Component, OnInit } from '@angular/core';
import {OutfitModel} from "../../model/outfit.model";
import {OutfitsServices} from "../../services/outfits.services";

@Component({
  selector: 'app-add-outfit',
  templateUrl: './add-outfit.component.html',
  styleUrls: ['./add-outfit.component.css']
})
export class AddOutfitComponent implements OnInit {

  outfit: OutfitModel = {
    name: '',
    img:'',
    description: '',
  };
  submitted = false;

  constructor(private outfitsServices:OutfitsServices) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      name: this.outfit.name,
      img:this.outfit.img,
      description: this.outfit.description
    };

    this.outfitsServices.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        e => {
          console.log(e);
        });
  }

  newPost(): void {
    this.submitted = false;
    this.outfit = {
      name: '',
      img:'',
      description: '',
    };
  }

}
