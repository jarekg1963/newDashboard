import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonfuncionsService {
  invokeOdswiezUseraPoDelete = new EventEmitter();
  subsVar: Subscription;


  constructor() { }

  odswierzGridaUsers() {
    this.invokeOdswiezUseraPoDelete.emit();
  }
}
