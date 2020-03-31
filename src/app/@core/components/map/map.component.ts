import { Component, OnInit } from '@angular/core';
//IMPORTANDO EL SERVICIO DEL MAPA
import { MapService } from '@core/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
