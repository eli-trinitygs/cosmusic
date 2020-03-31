import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';






const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule
]

@NgModule({
  imports: [MaterialComponents],

  exports: [MaterialComponents]
})
export class MaterialModule { }
