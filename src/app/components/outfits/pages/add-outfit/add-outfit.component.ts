import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OutfitModel} from "../../model/outfit.model";
import {OutfitsServices} from "../../services/outfits.services";
import {OutfitsStorageServices} from "../../services/outfits.storage.services";

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
  images: any[]=[];
  submitted = false;
  currentUserId=2;

  constructor(private outfitsServices:OutfitsServices,public route: ActivatedRoute,private  storageService:OutfitsStorageServices) { }

  ngOnInit(): void {
    this.routerTry();
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
          this.outfit.img=imgUrl;
        })
    }
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
  routerTry(){
    this.route.parent?.params.subscribe(params=>{
        this.currentUserId=params['userId'];
      }
    );
  }

}
