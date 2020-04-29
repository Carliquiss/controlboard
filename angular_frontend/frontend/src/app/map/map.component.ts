import { Component, OnInit } from '@angular/core';
import { circle, latLng, Map, polygon, marker, Layer, tileLayer } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { DeviceInfoService } from '../device-info.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {

  markers_array: any;
  markers: Layer[] = [];
  parsed_coordinates: any; 

  constructor(public httpClient: HttpClient, private deviceInfo: DeviceInfoService) { }

  ngOnInit(): void {
    this.addmarkers()
  }

  
  options = {
    layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
    ],
    zoom: 5,
    center: latLng(40.4381311, -3.8196196)
  };

/*
  layersControl = {
    baseLayers: {
        'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        'asd':this.markers
    },
    overlays: {
        'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
        'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]]),
        'Marker': marker(latLng(+"51.6515", +"-0.0850"))
    }
  }
*/

  
  addmarkers(){
    
    this.httpClient.get('http://localhost:5000/getCoordinates').subscribe((res)=>{
        this.markers_array = res

        for (let coordinates of this.markers_array.response){
          this.parsed_coordinates = coordinates.coordinates[0]

          const newMarker = marker([parseFloat(this.parsed_coordinates[0]), parseFloat(this.parsed_coordinates[1])]).on('click', ()=>{
            this.deviceInfo.sendInfo(JSON.stringify(coordinates.name));

          });
          this.markers.push(newMarker);
        };
      });

      console.log(this.markers);
  }


}
