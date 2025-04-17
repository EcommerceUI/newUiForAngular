import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // sidebarActive = false;

  // isAuthenticated(): boolean {
  //   return !!localStorage.getItem('Token');
  // }


  isLoading = false;

constructor(private loaderService: LoaderService) {}

ngOnInit() {
  this.loaderService.loading$.subscribe((loading) => {
    this.isLoading = loading;
  });
}




  
}
