import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  showChat = false;
  loggedInUser: any;
  newMessage: string = "";

  messages: any = [
    {
      sender: "1jDUaVDfuWTX8h81ckHJP0720il1",
      text: "hola"
    },
    {
      sender: "id",
      text: "testing"
    },
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(usuario=>{
      this.loggedInUser = usuario;
    })
  }
  sendMessage(){
    if (this.newMessage=="") return;
    console.log(this.newMessage);
    let message = {
      sender: this.loggedInUser.uid,
      text: this.newMessage
    }
    this.messages.push(message);

    this.newMessage = "";

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 10);
  }

  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msg');
    let lastMessage: any = elements[elements.length - 1];
    let scrollIntoView = lastMessage.offsetTop;

    // @ts-ignore
    document.getElementById('messageContainer')?.scrollTop = scrollIntoView;
  }

}
