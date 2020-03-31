import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MapComponent } from './@core/components/map/map.component';
import { BoxmapComponent } from './components/boxmap/boxmap.component';
import { PlayComponent } from './components/play/play.component';
import { AlbumComponent } from './components/album/album.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BodyComponent,
    FooterComponent,
    MapComponent,
    BoxmapComponent,
    PlayComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
