import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalmessangerService {

  private messageSource = new BehaviorSubject<string>( 'poczatkowa ');
  public currentMessage = this.messageSource.asObservable();

  private messageSource1 = new BehaviorSubject<number>( 0);
  public currentMessage1 = this.messageSource1.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changenumber(nu: number) {
    nu++;
    this.messageSource1.next(nu);
  }

}
