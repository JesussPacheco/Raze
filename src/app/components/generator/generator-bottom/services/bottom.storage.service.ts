import {Injectable} from "@angular/core";
import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import {environment} from "../../../../../environments/environment";

firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn:'root'
})
export class BottomStorageService{
  storageRef=firebase.app().storage().ref();
  constructor() { }

  async uploadImage(name: string, image: any){

    try {
      let response = await this.storageRef.child("bottom/"+name).putString(image,'data_url')
      console.log(response);
      return await response.ref.getDownloadURL();
    }catch (e){
      console.log(e)
      return "null";
    }
  }
}
