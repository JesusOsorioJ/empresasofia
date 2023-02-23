import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AnimationBookComponent } from './components/animation-book/animation-book.component';
import { BallComponent } from './components/ball/ball.component';
import { DiagonalComponent } from './components/diagonal/diagonal.component';
import { ALandingComponent } from './pages/a-landing/a-landing.component';
import { BSomosComponent } from './pages/b-somos/b-somos.component';
import { CValoresComponent } from './pages/c-valores/c-valores.component';
import { DMisionComponent } from './pages/d-mision/d-mision.component';
import { EServiciosComponent } from './pages/e-servicios/e-servicios.component';
import { FOpinionesComponent } from './pages/f-opiniones/f-opiniones.component';
import { GEnviosComponent } from './pages/g-envios/g-envios.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AnimationBookComponent,
    BallComponent,
    DiagonalComponent,
    ALandingComponent,
    BSomosComponent,
    CValoresComponent,
    DMisionComponent,
    EServiciosComponent,
    FOpinionesComponent,
    GEnviosComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
