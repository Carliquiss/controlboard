import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})


/*Esta es la segunda componente en la cual hacemos peticiones http al backend para obtener los datos
de todos los dispositivos y mostrarlos a través de tarjetas para cada uno de ellos con lo que se 
puede tener una vista rápida de todos los dispositivos infectados  */

export class HttpClientComponent implements OnInit {

  devices_names: any;     /*Array con el nombre de los diferentes dispositivos*/

  array_devices_info: any;      /*Array con los json de todos los dispositivos*/
  array_last_devices_info: any; /*Array solo con el json más actual de cada dispositivo*/

  messages: any;
  
  constructor(public httpClient: HttpClient) { 
    this.array_devices_info = [];
    this.array_last_devices_info = [];
  }
  
  ngOnInit(): void {
    this.updateDevices()
  }


  getDeviceInfo(names){

    /*Para cada uno de los nombres de dispositivos que se le pasan a la función en la variable "names"
    se pide su información y nos quedamos con el último mensaje, es decir, con el que tiene la información
    más actual*/
    for(let name of names)
    {
      this.httpClient.get('http://localhost:5000/getDeviceInfo?name=' + name).subscribe((res)=>{
        this.array_devices_info.push(res);

        this.messages = this.array_devices_info[this.array_devices_info.length-1].info;
        this.messages = this.messages[this.messages.length-1]

        this.array_last_devices_info.push(this.messages)
      });
    }
  }

  /*Obtenemos los nombres de los diferentes dispositivos para pedir la información de cada uno de ellos pasandoselos
  como variable de entrada a la función anterior*/
  updateDevices(){
    this.httpClient.get('http://localhost:5000/getNames').subscribe((res)=>{
        
        this.devices_names = res;
        this.devices_names = this.devices_names.names; 

        this.getDeviceInfo(this.devices_names);
        
    });
  }

}


