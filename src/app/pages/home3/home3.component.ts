import { Component } from '@angular/core';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html'
})
export class Home3Component {

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    // open header home3
    gsap.to(["#home3 #textheader", "#home3  #ArchieBoxheader"], {
      y: "-2vh", duration: 1.3, color: "#a8b2d1",
      scrollTrigger: {
        trigger: "#home3 #textheader", start: "center 15%", end: "center 11%",
        toggleActions: "play reverse play reverse",
      }, 
    });

    // open parrafo home3
    gsap.to("#parrafohome3", {
      color: "#e5e7eb", x: "2vh", duration: 2, stagger: 0.3,
      scrollTrigger: {
        trigger: "#parrafohome3", start: "center 80%", end: "center 0%",
        toggleActions: "play reverse play reverse",
      },
    });
    

  }
}


  // markers: {
            //   startColor: "purple",
            //   endColor: "fuchsia",
            //   fontSize: "3rem",
            // },