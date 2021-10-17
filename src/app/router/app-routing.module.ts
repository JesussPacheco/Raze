import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsManagerComponent} from "../components/posts/pages/posts-manager/posts-manager.component";
import {PostItemComponent} from "../components/posts/pages/post-item/post-item.component";
import {AddPostComponent} from "../components/posts/pages/add-post/add-post.component";


const routes: Routes = [

  {path:'posts',component:PostsManagerComponent},
  {path:'post/:id',component:PostItemComponent},
  {path:'add',component:AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
