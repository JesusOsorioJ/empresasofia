import { Component } from '@angular/core';
import { gsap } from 'gsap'


@Component({
  selector: 'app-a-landing',
  templateUrl: './a-landing.component.html'
})
export class ALandingComponent {
  
  foto=["book.jpg","fondo2.jpg","office.png"]
  
  height=window.innerHeight
  width=window.innerWidth
  cellWidth=window.innerWidth
  margin=20
  autoplay=true
  autoplayInterval=2000
  pauseOnHover=true
  dots=true
  loop=true
  ngOnInit() {
    // gsap.to("#optionlanding", 0, { y: "10vh" })
    // gsap.to("#optionlanding", 2, { y: "0vh", delay: 1 })

  }
}
