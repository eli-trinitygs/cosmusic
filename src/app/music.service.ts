import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor( private http: HttpClient) { }

  getMusic() {
    return this.http.get('https://api.deezer.com/album/302127');
  }
}
