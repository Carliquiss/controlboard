import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Material Desing imports*/
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';



/*Leaflet module (map drawing)*/
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

/*Http Client to make request to the backend*/
import { HttpClientModule } from '@angular/common/http';


/*Components*/
import { MapComponent } from './map/map.component';
import { HttpClientComponent } from './http-client/http-client.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    LeafletModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
