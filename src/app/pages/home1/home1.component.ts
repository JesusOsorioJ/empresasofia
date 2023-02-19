import { Component } from '@angular/core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {gsap} from 'gsap'
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html'
})
export class Home1Component {
  ngOnInit(){
    gsap.to("#optionlanding",0,{ y:"10vh", display:"none"})
    gsap.to("#optionlanding",0,{display:"flex", delay:1})
    gsap.to("#optionlanding",2,{y:"0vh", delay:1})
    gsap.registerPlugin(ScrollTrigger);

    // open header home1
    gsap.to(["#home1 #textheader", "#home1  #ArchieBoxheader"], {
      y: "-2vh", duration: 1.3, color: "#a8b2d1",
      scrollTrigger: {
        trigger: "#home1 #textheader", start: "center 15%", end: "center 5%",
        toggleActions: "play reverse play reverse",
        markers: {
              startColor: "purple",
              endColor: "fuchsia",
              fontSize: "3rem",
            },
      }, 
    });
  }
  
}
