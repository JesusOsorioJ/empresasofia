import { Component } from '@angular/core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { gsap } from 'gsap'

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html'
})
export class Home2Component {

  ngOnInit() {
    // open home2text home2
    gsap.to("#home2text", {
      color: "gray", x: "2vh", duration: 2, stagger:0.4,
      scrollTrigger: {
        trigger: "#home2text", start: "center 90%", end: "center 0%",
        toggleActions: "play none none none"
      },
    });
   }
}
