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

    // open parrafo home3
    gsap.to("#parrafohome3", {
      color: "gray", x: "2vh", duration: 2, stagger: 0.3,
      scrollTrigger: {
        trigger: "#parrafohome3", start: "center 80%", end: "center 0%",
        toggleActions: "play none none none",
      },
    });
    // open parrafo home3
    gsap.to("#imagehome3", {
      filter:" opacity(100%)", x: "-2vh", duration: 2,
      scrollTrigger: {
        trigger: "#imagehome3", start: "center 80%", end: "center 0%",
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