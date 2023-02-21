import { Component } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html'
})
export class Home4Component {
  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    // open parrafo home3
    gsap.to("#home4item", {
      color: "gray", x: "2vh", duration: 2, stagger: 0.5,
      scrollTrigger: {
        trigger: "#home4item", start: "center 80%", end: "center 0%",
        toggleActions: "play none none none"
      },
    });
    // open parrafo home3
    gsap.to("#imghome4", {
      filter: " opacity(100%)", y: "-2vh", duration: 2, stagger: 0.5,
      scrollTrigger: {
        trigger: "#imghome4", start: "center 80%", end: "center 0%",
        toggleActions: "play none none none",
      },
    });
  }
}
