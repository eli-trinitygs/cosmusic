import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../music.service';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  song: any;

  constructor( private MusicService: MusicService, 
     ) { }

  ngOnInit() {
    this.song = this.MusicService.getMusic();
  }

}
