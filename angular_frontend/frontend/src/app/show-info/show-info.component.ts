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
  valueReceived: any;

  constructor(private deviceinfoService: DeviceInfoService) {

    this.valueReceived = {"data":{"name":"Click any marker on the map and the button to show the info"}}

    this.subscription = this.deviceinfoService.getInfo().subscribe(info => {
      if(info){
        this.addinfo(info)
      }
      else{
        console.log("pues nada")
      }
    })
   }

  addinfo(info:string){
    this.valueReceived = info;
  }

  ngOnInit(): void {
  }

  updateinfo(){
  }

}
