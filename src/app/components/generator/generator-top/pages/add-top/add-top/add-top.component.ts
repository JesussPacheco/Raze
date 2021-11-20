import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopModel} from "../../../model/top.model";
import {TopServices} from "../../../services/top.services";
import {TopStorageServices} from "../../../services/top.storage.services";

@Component({
  selector: 'app-add-top',
  templateUrl: './add-top.component.html',
  styleUrls: ['./add-top.component.css']
})
export class AddTopComponent implements OnInit {

  top:TopModel={
    name:'',
    image:''
  };
  submitted=false;
  images: any[]=[];
  currentUserId=2;

  constructor(private topServices: TopServices, private storageService:TopStorageServices,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerTry();
  }

  saveTop(): void {
    const data = {
      name: this.top.name,
      image:this.top.image,
    };

    this.topServices.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        e => {
          console.log(e);
        });
  }

  newTop(): void {
    this.submitted = false;
    this.top = {
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
          this.top.image=imgUrl;
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
