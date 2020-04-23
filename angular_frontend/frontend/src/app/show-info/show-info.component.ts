import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceInfoService } from '../device-info.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})

export class ShowINfoComponent implements OnInit {

  subscription: Subscription;
  deviceInfo: any;
  vector_test: any[] = [];

  constructor(private deviceinfoService: DeviceInfoService) {
    this.subscription = this.deviceinfoService.getInfo().subscribe(info => {
      if(info){
        console.log("yeyy recibido")
        this.addinfo(info)
      }
    })
   }

  addinfo(info:string){
    this.vector_test.push(info)
  }

  ngOnInit(): void {
  }


}
