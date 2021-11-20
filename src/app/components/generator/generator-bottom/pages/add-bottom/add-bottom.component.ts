import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BottomModel} from "../../model/bottom.model";
import {BottomServices} from "../../services/buttom.services";
import {BottomStorageService} from "../../services/bottom.storage.service";

@Component({
  selector: 'app-add-bottom',
  templateUrl: './add-bottom.component.html',
  styleUrls: ['./add-bottom.component.css']
})
export class AddBottomComponent implements OnInit {

  bottom:BottomModel={
    name:'',
    image:''
  };
  submitted=false;
  images: any[]=[];
  currentUserId=2;

  constructor(private bottomServices: BottomServices, private storageService: BottomStorageService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerTry();
  }

  saveBottom(): void {
    const data = {
      name: this.bottom.name,
      image:this.bottom.image,
    };

    this.bottomServices.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        e => {
          console.log(e);
        });
  }

  newBottom(): void {
    this.submitted = false;
    this.bottom = {
      name: '',
      image:''
    };
  }

  uploadImage(event: any){
    let files = event.target.files;
    let reader = new FileReader()

    reader.readAsDataURL(files[0]);
    reader.onloadend=()=>{

      console.log(reader.result)
      this.images.push(reader.result);
      this.storageService.uploadImage("image"+"_"+Date.now(),reader.result)
        .then(imgUrl=>{
          this.bottom.image=imgUrl;
        })
    }
  }
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }

}
