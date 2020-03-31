import { Component, OnInit } from '@angular/core';
//IMPORTANDO EL SERVICIO DEL MAPA
// import { MapService } from '@core/services/map.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '@env/environment';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/streets-v11';
  // lat = -99.1433941;
  // lng = 19.435205;
  // zoom: 17;

  // constructor(private map: MapService) { }
  constructor() {}

  ngOnInit() {
    // this.map.viewMap();
    // mapboxgl.accessToken = environment.mapBoxToken;
    //   this.map = new mapboxgl.Map({
    //     container: 'map',
    //     style: this.style,
    //     zoom: 13,
    //     center: [this.lng, this.lat]
    // });
    // // Add map controls
    // this.map.addControl(new mapboxgl.NavigationControl());
  }

}
