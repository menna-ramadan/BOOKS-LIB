import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {EmbedViedoComponent} from '../shared/embed-viedo/embed-viedo.component';
import {SafePipe} from '../shared/pipes/safe.pipe';
import {MaterialsModule} from '../shared/material.mudule';
import {AuthModule} from '../Auth-modules/auth.module';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxPaginationModule} from 'ngx-pagination';
import {GeneralUsersComponent} from './users/general-users/general-users.component';
import {UserProfileComponent} from './users/user-profile/user-profile.component';
import {SearchComponent} from '../shared/search/search.component';
import { WishlistComponent } from './markets/wishlist/wish-list.component';
import { AuthersComponent } from './users/authers/authers.component';



@NgModule({
  declarations: [
    EmbedViedoComponent,
    SafePipe,
    AuthersComponent,
    GeneralUsersComponent,
    WishlistComponent,
    UserProfileComponent,
    SearchComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialsModule,
    ReactiveFormsModule,
    AuthModule,
    MatTabsModule,
    NgxPaginationModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CoreModule {
}
