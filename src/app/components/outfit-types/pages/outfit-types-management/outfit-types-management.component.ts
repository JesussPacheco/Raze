import { Component, OnInit } from '@angular/core';
import {OutfitType} from "../../model/outfit-type";
import {OutfitTypesService} from "../../services/outfit-types.service";
import {MatDialog} from "@angular/material/dialog";
import {OutfitTypeItemComponent} from "../outfit-type-item/outfit-type-item.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-outfit-types-management',
  templateUrl: './outfit-types-management.component.html',
  styleUrls: ['./outfit-types-management.component.css']
})
export class OutfitTypesManagementComponent implements OnInit {
  outfitTypes:OutfitType[];
  title = 'Card View Demo';
  currentType: OutfitType = {};
  currentIndex = -1;
  currentUserId=2;

  gridColumns = 3;
  constructor(private OutfitTypesService:OutfitTypesService,public dialog: MatDialog,public route: ActivatedRoute) {
    this.outfitTypes=[] as OutfitType[]
  }

  ngOnInit(): void {
    this.retrieveOutfitsTypes();
    this.routerTry();
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }
  openDialog() {
    const dialogRef = this.dialog.open(OutfitTypeItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  setActiveType(type: OutfitType, index: number): void {
    this.currentType = type;
    this.currentIndex = index;
  }

  retrieveOutfitsTypes():void{
    this.OutfitTypesService.getAll().
    subscribe(data=>{
        console.log(data);
        this.outfitTypes=data;
      },
      error => {console.log(error)} )
  }
}
