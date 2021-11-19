import { Component, OnInit } from '@angular/core';
import {FootWearModel} from "../../model/foot-wear.model";
import {FootWearServices} from "../../services/foot-wear.services";
import {FootWearStorageServices} from "../../services/foot-wear.storage.services";

@Component({
  selector: 'app-add-foot-wear',
  templateUrl: './add-foot-wear.component.html',
  styleUrls: ['./add-foot-wear.component.css']
})
export class AddFootWearComponent implements OnInit {

  footWear:FootWearModel={
    name:'',
    image:''
  };
  submitted=false;
  images: any[]=[];

  constructor(private footWearServices:FootWearServices, private storageServices:FootWearStorageServices) { }

  ngOnInit(): void {
  }

  saveFootWear(): void {
    const data = {
      name: this.footWear.name,
      image:this.footWear.image,
    };

    this.footWearServices.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        e => {
          console.log(e);
        });
  }

  newFootWear(): void {
    this.submitted = false;
    this.footWear = {
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
      this.storageServices.uploadImage("image"+"_"+Date.now(),reader.result)
        .then(imgUrl=>{
          this.footWear.image=imgUrl;
        })
    }
  }
}
