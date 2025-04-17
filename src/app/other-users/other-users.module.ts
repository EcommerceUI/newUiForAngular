import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherUsersRoutingModule } from './other-users-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    OtherUsersRoutingModule,
    FormsModule
  

    
  ],

})
export class OtherUsersModule { }
