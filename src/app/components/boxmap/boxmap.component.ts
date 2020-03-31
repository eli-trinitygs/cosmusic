import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import * as Mapboxgl from 'mapbox-gl';



@Component({
  selector: 'app-boxmap',
  templateUrl: './boxmap.component.html',
  styleUrls: ['./boxmap.component.css']
})
export class BoxmapComponent implements OnInit {

  constructor() { }

  mapa: Mapboxgl.Map;

  ngOnInit() {

    (Mapboxgl as any).accessToken = environment.mapBoxToken;
this.mapa = new Mapboxgl.Map({
container: 'mapa-mapbox', // container id
style: 'mapbox://styles/mapbox/streets-v11',
center: [-99.1433941, 19.435205,], // starting position
zoom: 17 // starting zoom
});

//LLAMANDO EL METODO
this.createMarker(-99.1433941, 19.435205);
this.searchUbication(-99.1433941, 19.435205);
  }

  //crear metodo para generar el marcador
  createMarker (lng: number, lat: number){

    const marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
       
      marker.on('drag', () => {
        console.log(marker.getLngLat());
      })
      
  }
//REGISTRAR UBICACION DEL USUARIO
searchUbication(lng: number, lat: number) {
  this.mapa.addControl(
    new Mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    })
    );
}



}
