import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private logout: CommonService) {}

  logoutAccount() {
    let value = confirm('Are you sure to logout?');

    if (value) {
      this.logout.logoutService();
    }
  }
}
