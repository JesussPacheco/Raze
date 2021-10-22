import { Component, OnInit } from '@angular/core';
import {OutfitType} from "../../model/outfit-type";
import {OutfitTypesService} from "../../services/outfit-types.service";
import {MatDialog} from "@angular/material/dialog";
import {OutfitTypeItemComponent} from "../outfit-type-item/outfit-type-item.component";
import {OutfitTypesEditComponent} from "../outfit-types-edit/outfit-types-edit.component";
import {OutfitTypesDeleteComponent} from "../outfit-types-delete/outfit-types-delete.component";

@Component({
  selector: 'app-outfit-types-management',
  templateUrl: './outfit-types-management.component.html',
  styleUrls: ['./outfit-types-management.component.css']
})
export class OutfitTypesManagementComponent implements OnInit {
  outfitTypes:OutfitType[];
  title = 'Card View Demo';

  gridColumns = 3;
  constructor(private OutfitTypesService:OutfitTypesService,public dialog: MatDialog,) {
    this.outfitTypes=[] as OutfitType[]
  }

  ngOnInit(): void {
    this.retrieveOutfitsTypes();
  }
  openDialogMore(id:number) {
    const dialogRef = this.dialog.open(OutfitTypeItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEdit(id:number){
    const dialogRef = this.dialog.open(OutfitTypesEditComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogDelete(id:number){
    const dialogRef = this.dialog.open(OutfitTypesDeleteComponent,{
      data: {
        id:id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
