import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private data = new Subject<any>();

  publish(data: any = "") {
    this.data.next(data);
  }

  subscribe(): Subject<any> {
    return this.data;
  }  
}
