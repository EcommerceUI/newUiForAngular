import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherUsersRoutingModule } from './other-users-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    OtherUsersRoutingModule
  ]
})
export class OtherUsersModule { }
