import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { AddFashionComponent } from './components/fashions/pages/add-fashion/add-fashion.component';
import { FashionFeatureComponent } from './components/fashions/pages/fashion-feature/fashion-feature.component';
import { FashionsListComponent } from './components/fashions/pages/fashions-list/fashions-list.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./material/material.module";
import { PostsManagerComponent } from './components/posts/pages/posts-manager/posts-manager.component';
import { PostItemComponent } from './components/posts/pages/post-item/post-item.component';
import { AddPostComponent } from './components/posts/pages/add-post/add-post.component';
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
    OutfitTypeItemComponent,
    AddFashionComponent,
    FashionFeatureComponent,
    FashionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
