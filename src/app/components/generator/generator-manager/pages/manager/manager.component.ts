import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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
  currentUserId=2;
  constructor(private outfitGeneratedServices : OutfitGeneratedServices,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerTry();
    this.retrieveOutfitsGenerated();
  }

  retrieveOutfitsGenerated(): void {
    this.outfitGeneratedServices.findByUser(this.currentUserId)
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
  
  selectTop(top: TopModel){
    console.log(top);
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }
}
