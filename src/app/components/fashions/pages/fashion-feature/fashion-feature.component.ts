import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionModel } from "../../model/fashion.model";
import { FashionsService } from "../../services/fashions.service";

@Component({
  selector: 'app-fashion-feature',
  templateUrl: './fashion-feature.component.html',
  styleUrls: ['./fashion-feature.component.css']
})
export class FashionFeatureComponent implements OnInit {

  currentFashion: FashionModel = {
    name: ''
  };
  message = '';
  currentUserId=2;

  constructor(
    private fashionService: FashionsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getFashion(this.route.snapshot.params.id);
    this.routerTry();
  }

  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }
  getFashion(id: string): void {
    this.fashionService.get(id)
      .subscribe(
        data => {
          this.currentFashion = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateFashion(): void {
    this.message = '';

    this.fashionService.update(this.currentFashion.id, this.currentFashion)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This fashion was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteFashion(): void {
    this.fashionService.delete(this.currentFashion.id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
