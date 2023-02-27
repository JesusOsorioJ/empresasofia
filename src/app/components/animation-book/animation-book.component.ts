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
    gsap.to(["#baseBook", "#coverBook"], 0, { width: "2.8rem" })
    gsap.to(["#libroBook1", "#libroBook2", "#libroBook3"], 0, { width: "2.4rem" })
    gsap.to(["#coverBook"], 0, { y: "-2.8rem", x: "0.4rem" })
    gsap.to(["#baseBook"], 0, { y: "4.4rem" })
    gsap.to(["#libroBook1", "#libroBook2", "#libroBook3",
      "#libroBook4"], 0, { x: "1.6rem", y: "-0.8rem" })

    gsap.to("#coverBook", {
      onStart: () => this.bookMove(),
      scrollTrigger: {
        trigger: "#coverBook", start: "top 95%", end: "top 0%",
        toggleActions: "play reverse play reverse",
      },
    });

  }
  public bookMove(){
    gsap.to(["#libroBook1"], 1, { y: "3.4rem", ease: "bounce", delay: "0" })
    gsap.to(["#libroBook2"], 0.73, { y: "2.3rem", ease: "bounce", delay: "0.5" })
    gsap.to(["#libroBook3"], 0.47, { y: "1.2rem", ease: "bounce", delay: "1" })
    gsap.to(["#coverBook"], 1, { y: "-0.4vh", ease: "bounce", delay: "1.3" })
  }


//  public mouseEnter(){

//   gsap.to(["#coverBook"], 2, { y: "-2.8rem" })
//     gsap.to(["#libroBook3"], 1, {  y: "-0.8rem", delay:0.5  })
//     gsap.to(["#libroBook2"], 1, {  y: "0.3rem" ,delay:1.0 })
//     gsap.to(["#libroBook1"], 1, {  y: "1.44rem" ,delay:1.5})
//   }
    
//  public mouseLeave(){
//   gsap.to(["#libroBook1"], 2, { y: "3.4rem", ease: "bounce", delay: "0" })
//   gsap.to(["#libroBook2"], 1.5, { y: "2.3rem", ease: "bounce", delay: "1.0" })
//   gsap.to(["#libroBook3"], 1, { y: "1.2rem", ease: "bounce", delay: "2.0" })
//   gsap.to(["#coverBook"], 2, { y: "-0.4rem", ease: "bounce", delay: "2.5" })
//  } 

}

