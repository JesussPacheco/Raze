import { Component, OnInit } from '@angular/core';
import { FashionModel } from "../../model/fashion.model";
import { FashionsService } from "../../services/fashions.service";

@Component({
  selector: 'app-add-fashion',
  templateUrl: './add-fashion.component.html',
  styleUrls: ['./add-fashion.component.css']
})
export class AddFashionComponent implements OnInit {

  fashion: FashionModel = {
    name: '',
    specialtyId: 0,
    published: false
  };
  submitted = false;

  constructor(private fashionService: FashionsService) { }

  ngOnInit(): void {
  }

  saveFashion(): void {
    const data = {
      name: this.fashion.name,
      specialtyId: this.fashion.specialtyId
    };

    this.fashionService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newFashion(): void {
    this.submitted = false;
    this.fashion = {
      name: '',
      specialtyId: 0,
      published: false
    };
  }
}
