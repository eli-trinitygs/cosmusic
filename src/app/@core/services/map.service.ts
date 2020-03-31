import { Injectable, OnInit } from '@angular/core';
import { environment } from '@env/environment';
//import MapBox
import * as Mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService implements OnInit {

map: Mapboxgl.Map;
  ngOnInit() {
    //llamando enviroments
    (Mapboxgl as any).accessToken = environment.mapBoxToken;
this.map = new Mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11',
center: [-99.1433941, 19.435205,], // starting position
zoom: 17 // starting zoom
});
    
  }

  constructor() { }
}
