import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import { PostsManagerComponent } from './components/posts/pages/posts-manager/posts-manager.component';
import { PostItemComponent } from './components/posts/pages/post-item/post-item.component';
import { AddPostComponent } from './components/posts/pages/add-post/add-post.component';
import {FormsModule} from "@angular/forms";
import { OutfitsManagerComponent } from './components/outfits/pages/outfits-manager/outfits-manager.component';
import { OutfitsItemComponent } from './components/outfits/pages/outfits-item/outfits-item.component';
import { AddOutfitComponent } from './components/outfits/pages/add-outfit/add-outfit.component';
import { OutfitTypesManagementComponent } from './components/outfit-types/pages/outfit-types-management/outfit-types-management.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { OutfitTypeItemComponent } from './components/outfit-types/pages/outfit-type-item/outfit-type-item.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsManagerComponent,
    PostItemComponent,
    AddPostComponent,
    OutfitsManagerComponent,
    OutfitsItemComponent,
    AddOutfitComponent,
    OutfitTypesManagementComponent,
    OutfitTypeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
