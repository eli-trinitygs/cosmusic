import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './components/play/play.component';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/body-page/body-page.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  // { path: 'body', component: BodyComponent},
  // { path: 'footer', component: FooterComponent},
  // { path: 'play/', component: PlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
