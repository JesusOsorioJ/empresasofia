import { Component } from '@angular/core';
import { databases } from './database'
import { gsap } from 'gsap';

@Component({
  selector: 'app-f-opiniones',
  templateUrl: './f-opiniones.component.html'
})
export class FOpinionesComponent {
  data = databases
  ancho=window.innerWidth
  height=400
  cellWidth=300
  margin=20
  autoplay=false
  autoplayInterval=2000
  pauseOnHover=true
  dots=true
  loop=true
  
  ngOnInit(){
    gsap.to("#opiniones", {
      onStart: () => {this.autoplay=true},
      scrollTrigger: {
        trigger: "#opiniones", start: "top 90%", end: "top 0%",
        toggleActions: "play none none none",
      },

  })
}
}
