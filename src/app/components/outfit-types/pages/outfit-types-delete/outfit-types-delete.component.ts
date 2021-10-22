import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-outfit-types-delete',
  templateUrl: './outfit-types-delete.component.html',
  styleUrls: ['./outfit-types-delete.component.css']
})
export class OutfitTypesDeleteComponent implements OnInit {
  pepito=3;
  constructor(public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.pepito)
    console.log(this.data.id)
  }

}
