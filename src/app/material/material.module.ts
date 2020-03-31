import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';


const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule
]

@NgModule({
  imports: [MaterialComponents],

  exports: [MaterialComponents]
})
export class MaterialModule { }
