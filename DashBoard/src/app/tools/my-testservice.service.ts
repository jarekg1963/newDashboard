import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyTestserviceService {

  constructor() { }

  todayDate() {
    const ndate = new Date();
    return ndate;
  }
}
