import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {GeneralUsersComponent} from '../core/users/general-users/general-users.component';
import {UserProfileComponent} from '../core/users/user-profile/user-profile.component';
import {  WishlistComponent } from '../core/markets/wishlist/wish-list.component';
import { AuthersComponent } from '../core/users/authers/authers.component';



const all_routes: Routes = [
  {path: '', redirectTo: 'users-list', pathMatch: 'full'},
  {path: 'users-list', component: GeneralUsersComponent, pathMatch: 'full'},


  {
    path: 'users-list',
    component: GeneralUsersComponent,
  },

  {
    path: 'auther/:id',
    component: AuthersComponent,
  },
  {
    path: 'wish-list',
    component: WishlistComponent,
    pathMatch: 'full',
  },



  {
    path: 'auther/:id',
    component: AuthersComponent,
  },

  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
  },


 
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: all_routes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
