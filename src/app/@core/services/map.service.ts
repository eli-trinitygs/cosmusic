import { Injectable, OnInit } from '@angular/core';
// import { environment } from '@env/environment';
// //import MapBox
// import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  // mapbox= (mapboxgl as typeof mapboxgl);
  // map: mapboxgl.Map;
  // style: 'mapbox://styles/mapbox/streets-v11';
  // //coordenadas
  // lat = -99.1433941;
  // long = 19.435205;
  // zoom: 17;

  constructor() { 
    //LLAMANDO EL TOKEN DESDE LAS VARIABLES
  //   this.mapbox.accessToken = environment.mapBoxToken;
  // }
  // viewMap() {
  //   this.map = new mapboxgl.Map( {
  //     container: 'map-container',
  //     style: this.style,
  //     center: [this.long, this.lat],// starting position
  //     zoom: this.zoom // starting zoom
  //   });
  //   this.map.addControl(new mapboxgl.NavigationControl());
  // }

}

// export class MapService implements OnInit {

//   map: Mapboxgl.Map;
  
//     ngOnInit() {
//       //llamando enviroments
//       (Mapboxgl as any).accessToken = environment.mapBoxToken;
  
//   this.map = new Mapboxgl.Map({
//   container: 'map-container', // container id
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [-99.1433941, 19.435205,], // starting position
//   zoom: 17 // starting zoom
//   });
      
     }
