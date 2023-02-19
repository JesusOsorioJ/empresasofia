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
    // open header home2
    gsap.to(["#home2 #textheader", "#home2  #ArchieBoxheader"], {
      y: "-2vh", duration: 1.3, color: "#a8b2d1",
      scrollTrigger: {
        trigger: "#home2 #textheader", start: "center 15%", end: "center 11%",
        toggleActions: "play reverse play reverse",
      }, 
    });
    // open home2text home2
    gsap.to("#home2text", {
      color: "#d1d5db", x: "2vh", duration: 2,
      scrollTrigger: {
        trigger: "#home2text", start: "center 90%", end: "center 0%",
        toggleActions: "play reverse play reverse"
      },
    });
    // open home2item home2
    gsap.to("#home2item", {
      color: "#e5e7eb", x: "2vh", duration: 2, stagger: 0.3,
      scrollTrigger: {
        trigger: "#home2item", start: "center 85%", end: "center 0%",
        toggleActions: "play reverse play reverse",
      }
    });
   }
}
