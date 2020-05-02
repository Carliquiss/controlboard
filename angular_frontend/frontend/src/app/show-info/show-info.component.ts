import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceInfoService } from '../device-info.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})


/*En esta componente recogemos los datos que se han pasado desde el mapa (al clickar en un marcador)
a través del servicio device info y se muestran cuando se pulsa el botón*/
export class ShowINfoComponent implements OnInit {

  subscription: Subscription;
  valueReceived: any;

  constructor(private deviceinfoService: DeviceInfoService) {

    this.valueReceived = {"data":{"name":"Click any marker on the map and the button to show the info"}}
    
    /*Esta función está subscrita a getInfo() del servicio para que cuando hay una actualización de
    la información pasada se actualice la variable que lo contiene */

    this.subscription = this.deviceinfoService.getInfo().subscribe(info => {
      if(info){
        this.valueReceived = info;
      }
    })
   }

  ngOnInit(): void {
  }

  updateinfo(){
  }

}
