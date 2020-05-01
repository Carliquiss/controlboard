import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class DeviceInfoService {
  
  private subject = new Subject<any>();

  constructor() { }

  sendInfo(info:any){
    this.subject.next({"data":JSON.parse(info)});
  }

  clearInfo(){
    this.subject.next();
  }

  getInfo(): Observable<any>{
    return this.subject.asObservable();
  }

}
