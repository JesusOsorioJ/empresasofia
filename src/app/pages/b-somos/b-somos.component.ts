import { Component } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-b-somos',
  templateUrl: './b-somos.component.html'
})
export class BSomosComponent {

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    // open home2text home2
    gsap.to("#home2text", {
      color: "gray", x: "1rem", duration: 2, stagger: 0.6,
      scrollTrigger: {
        trigger: "#home2text", start: "center 90%", end: "center 0%",
        toggleActions: "play none none none"
      },
    });

    // open home2text home2
    gsap.to("#optionlanding", {
       y: "-3rem", duration: 1, stagger: 0.6,
      scrollTrigger: {
        trigger: "#optionlanding", start: "center 90%", end: "center 0%",
        toggleActions: "play none none none",
      },
    });

  }
}
// markers: {
                //   startColor: "purple",
                //   endColor: "fuchsia",
                //   fontSize: "3rem",
                // },