import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-animation-book',
  templateUrl: './animation-book.component.html'
})
export class AnimationBookComponent {

  ngOnInit() {
    // Open animation book for header
    gsap.to("#box", 0, { display: "inLine", position: "relative" })

    gsap.to(["#baseBook", "#libroBook1", "#libroBook2", "#libroBook3", "#coverBook"], 0
      , { display: "inLine", position: "relative" })
    gsap.to(["#baseBook", "#coverBook"], 0, { width: "10vh" })
    gsap.to(["#libroBook1", "#libroBook2", "#libroBook3"], 0, { width: "6vh" })
    gsap.to(["#coverBook"], 0, { y: "-7vh", x: "1vh" })
    gsap.to(["#baseBook"], 0, { y: "11vh" })
    gsap.to(["#libroBook1", "#libroBook2", "#libroBook3",
      "#libroBook4"], 0, { x: "4vh", y: "-2vh" })

    gsap.to(["#libroBook1"], 2, { y: "8.5vh", ease: "bounce", delay: "0" })
    gsap.to(["#libroBook2"], 1.5, { y: "5.75vh", ease: "bounce", delay: "1.0" })
    gsap.to(["#libroBook3"], 1, { y: "3vh", ease: "bounce", delay: "2.0" })
    gsap.to(["#coverBook"], 2, { y: "-1vh", ease: "bounce", delay: "2.5" })

  }
 public mouseEnter(){

  gsap.to(["#coverBook"], 2, { y: "-7vh" })
    gsap.to(["#libroBook3"], 1, {  y: "-2vh", delay:0.5  })
    gsap.to(["#libroBook2"], 1, {  y: "0.75vh" ,delay:1.0 })
    gsap.to(["#libroBook1"], 1, {  y: "3.5vh" ,delay:1.5})
  }
    
 public mouseLeave(){
  gsap.to(["#libroBook1"], 2, { y: "8.5vh", ease: "bounce", delay: "0" })
  gsap.to(["#libroBook2"], 1.5, { y: "5.75vh", ease: "bounce", delay: "1.0" })
  gsap.to(["#libroBook3"], 1, { y: "3vh", ease: "bounce", delay: "2.0" })
  gsap.to(["#coverBook"], 2, { y: "-1vh", ease: "bounce", delay: "2.5" })
 } 

}

