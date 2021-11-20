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
import {LoginComponent} from "../components/login/pages/login/login.component";
import {RegisterComponent} from "../components/login/pages/register/register.component";
import {InterestsListComponent } from '../components/interest/pages/interests-list/interests-list.component';
import {InterestFeatureComponent } from '../components/interest/pages/interest-feature/interest-feature.component';
import {AddInterestComponent } from '../components/interest/pages/add-interest/add-interest.component';
import {OutfitTypeItemComponent} from "../components/outfit-types/pages/outfit-type-item/outfit-type-item.component";
import {CalendarComponent} from "../components/calendar/calendar.component";
import {GeneratorManagerComponent} from "../components/generator/generator-manager/pages/generator-manager/generator-manager.component";
import {AddTopComponent} from "../components/generator/generator-top/pages/add-top/add-top/add-top.component";
import {AddBottomComponent} from "../components/generator/generator-bottom/pages/add-bottom/add-bottom.component";
import {AddFootWearComponent} from "../components/generator/generator-foot-wear/pages/add-foot-wear/add-foot-wear.component";
import {ManagerComponent} from "../components/generator/generator-manager/pages/manager/manager.component";
import {HomeComponent} from "../components/home/home.component";
import {ProfileComponent} from "../components/profile/pages/profile/profile.component";
import {ProfileVisitedComponent} from "../components/profile/pages/profile-visited/profile-visited.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,  },
  { path: 'register', component: RegisterComponent,  },
  {path:'home/:userId',component:HomeComponent,
    children:[
      {path:'posts',component:PostsManagerComponent},
      {path:'post/:id',component:PostItemComponent},
      {path:'add',component:AddPostComponent},
      {path:'outfits',component:OutfitsManagerComponent},
      {path:'outfit/:id',component:OutfitsItemComponent},
      {path:'addOutfit',component:AddOutfitComponent},
      {path:'outfit-types', component: OutfitTypesManagementComponent},
      { path: 'fashions', component: FashionsListComponent },
      { path: 'fashions/:id', component: FashionFeatureComponent },
      { path: 'add-fashion', component: AddFashionComponent },
      { path: 'interests', component: InterestsListComponent },
      { path: 'interests/:id', component: InterestFeatureComponent },
      { path: 'add-interest', component: AddInterestComponent },
      { path: 'outfit-type/:id',component: OutfitTypeItemComponent},
      {path:'calendar',component:CalendarComponent},
      {path:'generator', component:GeneratorManagerComponent},
      {path:'addTop', component:AddTopComponent},
      {path:'addBottom', component:AddBottomComponent},
      {path:'addFootWear', component:AddFootWearComponent},
      {path:'manager',component:ManagerComponent},
      {path:'profile',component:ProfileComponent},
      {path:'visited/:visitedId',component:ProfileVisitedComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
