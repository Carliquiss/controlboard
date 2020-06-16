import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/*
Este es el servicio encargado de pasar la información del marcador clickado en el mapa (primera componente) a la
segunda componente para que se muestre cuando se pulsa el botón "Show Info". Para ello tiene un método observable
que manda una notificación a todos los métodos subscritos cuando actualiza los datos de una variable. Esta variable
se actualiza con un método que llama la primera componente cada vez que se hace click en uno de los marcadores. 
*/
@Injectable({providedIn: 'root'})
export class DeviceInfoService {
  
  private subject = new Subject<any>();

  constructor() { }

  /*Método que modifica la información de una variable que activa al método observable */
  sendInfo(info:any){
    this.subject.next({"data":JSON.parse(info)});
  }

  clearInfo(){
    this.subject.next();
  }

  /*Método observable que notifica a los subscritos cuando hay cambios */
  getInfo(): Observable<any>{
    return this.subject.asObservable();
  }

}
