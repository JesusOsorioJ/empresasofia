import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Home1Component } from './pages/home1/home1.component';
import { Home2Component } from './pages/home2/home2.component';
import { Home3Component } from './pages/home3/home3.component';
import { Home4Component } from './pages/home4/home4.component';
import { AnimationBookComponent } from './components/animation-book/animation-book.component';
import { BallComponent } from './components/ball/ball.component';
import { DiagonalComponent } from './components/diagonal/diagonal.component';
import { Home5Component } from './pages/home5/home5.component';
import { Home6Component } from './pages/home6/home6.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    AnimationBookComponent,
    BallComponent,
    DiagonalComponent,
    Home5Component,
    Home6Component    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
