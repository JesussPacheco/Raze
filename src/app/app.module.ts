import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './router/app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import { PostsManagerComponent } from './components/posts/pages/posts-manager/posts-manager.component';
import { PostItemComponent } from './components/posts/pages/post-item/post-item.component';
import { AddPostComponent } from './components/posts/pages/add-post/add-post.component';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    PostsManagerComponent,
    PostItemComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
