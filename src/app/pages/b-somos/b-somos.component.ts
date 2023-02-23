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
      color: "gray", x: "2vh", duration: 2, stagger: 0.6,
      scrollTrigger: {
        trigger: "#home2text", start: "center 90%", end: "center 0%",
        toggleActions: "play none none none"
      },
    });

    // open home2text home2
    gsap.to("#optionlanding", {
       y: "-5vh", duration: 1, stagger: 0.6,
      scrollTrigger: {
        trigger: "#optionlanding", start: "center 90%", end: "center 0%",
        toggleActions: "play none none none",
      },
    });

    // gsap.to("#optionlanding", 0, { y: "10vh" })
    // gsap.to("#optionlanding", 2, { y: "0vh", delay: 1 })
  }
}
// markers: {
                //   startColor: "purple",
                //   endColor: "fuchsia",
                //   fontSize: "3rem",
                // },