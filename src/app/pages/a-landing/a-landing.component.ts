import { Component } from '@angular/core';
import { gsap } from 'gsap'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 


@Component({
  selector: 'app-a-landing',
  templateUrl: './a-landing.component.html'
})
export class ALandingComponent {
  
  data1=["book.jpg","fondo2.jpg","office.png"]

  
  constructor(private _config:NgbCarouselConfig){

  }
  ngOnInit() {
    gsap.to("#optionlanding", 0, { y: "10vh" })
    gsap.to("#optionlanding", 2, { y: "0vh", delay: 1 })

  }
}
