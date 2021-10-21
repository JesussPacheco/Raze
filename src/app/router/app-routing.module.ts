import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsManagerComponent} from "../components/posts/pages/posts-manager/posts-manager.component";
import {PostItemComponent} from "../components/posts/pages/post-item/post-item.component";
import {AddPostComponent} from "../components/posts/pages/add-post/add-post.component";
import {OutfitsManagerComponent} from "../components/outfits/pages/outfits-manager/outfits-manager.component";
import {OutfitsItemComponent} from "../components/outfits/pages/outfits-item/outfits-item.component";
import {AddOutfitComponent} from "../components/outfits/pages/add-outfit/add-outfit.component";
import {OutfitTypesManagementComponent} from "../components/outfit-types/pages/outfit-types-management/outfit-types-management.component";
import {FashionsListComponent} from "../components/fashions/pages/fashions-list/fashions-list.component";
import {FashionFeatureComponent} from "../components/fashions/pages/fashion-feature/fashion-feature.component";
import {AddFashionComponent} from "../components/fashions/pages/add-fashion/add-fashion.component";

const routes: Routes = [
  { path: '', redirectTo: 'fashions', pathMatch: 'full' },
  {path:'posts',component:PostsManagerComponent},
  {path:'post/:id',component:PostItemComponent},
  {path:'add',component:AddPostComponent},
  {path:'outfits',component:OutfitsManagerComponent},
  {path:'outfit/:id',component:OutfitsItemComponent},
  {path:'addOutfit',component:AddOutfitComponent},
  {path:'outfit-types', component: OutfitTypesManagementComponent},
  { path: 'fashions', component: FashionsListComponent },
  { path: 'fashions/:id', component: FashionFeatureComponent },
  { path: 'add-fashion', component: AddFashionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
