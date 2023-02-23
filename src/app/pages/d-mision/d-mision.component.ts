import { Component } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-d-mision',
  templateUrl: './d-mision.component.html'
})
export class DMisionComponent {
  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    // open parrafo home3
    gsap.to("#parrafohome3", {
      color: "#383838", x: "2vh", duration: 2, stagger: 0.3,
      scrollTrigger: {
        trigger: "#parrafohome3", start: "center 80%", end: "center 0%",
        toggleActions: "play none none none",
      },
    });
   
  }
}
