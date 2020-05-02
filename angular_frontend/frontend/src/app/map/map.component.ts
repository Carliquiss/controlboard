import { Component, OnInit } from '@angular/core';
import {  latLng, marker, Layer, tileLayer } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { DeviceInfoService } from '../device-info.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

/*
En esta componente dibujamos el mapa con los diferentes marcadores para los dispositivos. Para ello utilizamos la 
libreria ngx-leaflet (basada en leaflet)
 */

export class MapComponent implements OnInit {

  markers_array: any;
  markers: Layer[] = [];    /* Esta es la capa donde irán todos los marcadores que se representan en el mapa*/
  parsed_coordinates: any; 

  constructor(public httpClient: HttpClient, private deviceInfo: DeviceInfoService) { }

  ngOnInit(): void {
    this.addmarkers()
  }

  
  options = {
    /* Como opciones a la hora de dibujar el mapa elegimos el zoom y las coordenadas donde se centrará la primera vez,
    en este caso, está centrado en España */

    layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
    ],
    zoom: 5,
    center: latLng(40.4381311, -3.8196196)
  };

  
  addmarkers(){

    /*Método que realiza una petición http al backend para obtener los dispositivos con sus coordenadas y 
    crea un marcador para cada uno de ellos. Además, envía la información de cada marcador al servicio "device-info"
    cuando se hace click en alguno para que pueda mostrar la info en la segunda componente*/

    this.httpClient.get('http://localhost:5000/getCoordinates').subscribe((res)=>{
        this.markers_array = res

        for (let device_info of this.markers_array.response){
          this.parsed_coordinates = device_info.coordinates[0]

          /*Creamos los distintos marcadores y establecemos el método OnClick para pasar la info al servicio device-info */
          const newMarker = marker([parseFloat(this.parsed_coordinates[0]), parseFloat(this.parsed_coordinates[1])]).on('click', ()=>{
            this.deviceInfo.sendInfo(JSON.stringify(device_info));
          });

          this.markers.push(newMarker);
        };
      });
  }


}
