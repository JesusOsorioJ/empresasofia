import { Component } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html'
})
export class Home2Component {

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
  }
}
