import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // private loading: boolean =false;
  // loading$: any;
  // constructor( ){}
  // setLoading(loading:boolean) {
  //   this.loading = loading;
  // }

  // getLoading(): boolean{
  //   return this.loading;
  // }
  private loadingSubject = new BehaviorSubject<boolean>(false);

  get loading$(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  true(): void {
    this.loadingSubject.next(true);
  }

  // Called when loading ends
  false(): void {
    this.loadingSubject.next(false);
  }
}
