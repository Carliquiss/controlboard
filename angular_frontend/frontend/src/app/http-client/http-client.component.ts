import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})

export class HttpClientComponent implements OnInit {

  devices_names: any;     /*Array with the name of the different devices*/

  array_devices_info: any;      /*Array with all the jsons from the different devices*/
  array_last_devices_info: any; /*Array with just the last json from each deice*/

  messages: any;

  constructor(public httpClient: HttpClient) { 
    this.array_devices_info = [];
    this.array_last_devices_info = [];
  }
  
  ngOnInit(): void {
    this.updateDevices()
  }

  getDeviceInfo(names){

    /*To get the different jsons from all the devices on names array*/
    for(let name of names)
    {
      this.httpClient.get('http://localhost:5000/getDeviceInfo?name=' + name).subscribe((res)=>{
        this.array_devices_info.push(res);

        this.messages = this.array_devices_info[this.array_devices_info.length-1].info;
        this.messages = this.messages[this.messages.length-1]

        this.array_last_devices_info.push(this.messages)
      });
    }


    /*To get just the last json of each device to print it on the html*/
    for(let full_info of this.array_devices_info){
      this.array_last_devices_info.push();
    }

  }

  /*To get the different names of all the devices in the DB*/
  updateDevices(){
    this.httpClient.get('http://localhost:5000/getNames').subscribe((res)=>{
        
        this.devices_names = res;
        this.devices_names = this.devices_names.names; 

        this.getDeviceInfo(this.devices_names);
        
    });
  }

}


