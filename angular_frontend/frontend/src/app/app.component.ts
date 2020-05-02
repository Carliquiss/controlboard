import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'frontend';
}
/*
Esta es la componente principal, es la encargada de renderizar la estructura del html de la página principal.

La página se ha dividido en 3 secciones: 
  - La primera donde se encuentra un mapa con la localización de los diferentes dispositivos 
  en los cuales se puede hacer click para ver su información en la tarjeta de al lado.Es la que
  localiza en la parte superior a la izquierda. 

  - La segunda sección es donde se muestra la información del dispositivo que hemos clickado. Es la
  que se localiza en la parte superior a la derecha. 

  - La tercer y última es donde se muestra una tarjeta para cada uno de los dispositivos infectados que se
  encuentra en la base de datos. 
  
  Para cada una de las diferentes secciones se ha creado una componente dentro del proyecto de angular:
  
  - Componente sección 1: map
  - Componente sección 2: show-info
  - Componente sección 3: http-client

  Además para la comunicación entre la componente map y show-info se ha creado el servicio device-info
  que permite mostrar los datos en la componente 2 del dispositivo que se ha clickado dentro del mapa
  de la componente 1. 
  
  Todos los datos de los dispositivos se encuentra almacenada en una base de datos en MongoDB y se acceden
  mediante peticiones http al backend que es el encargado de traducir estas peticiones a la base de datos
  y devolver los resultados en formato JSON. 
  

 */
