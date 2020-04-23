import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class DeviceInfoService {
  
  private subject = new Subject<any>();

  constructor() { }

  sendInfo(device:string){
    console.log("llamando a sendInfo")
    this.subject.next({name:device});
  }

  clearInfo(){
    this.subject.next();
  }

  getInfo(): Observable<any>{
    return this.subject.asObservable();
  }

}
