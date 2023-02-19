import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-animation-book',
  templateUrl: './animation-book.component.html'
})
export class AnimationBookComponent {

  ngOnInit(){
   gsap.to("#box",0,{display:"inLine", position:"relative"})
   
   gsap.to(["#baseBook","#libroBook1","#libroBook2","#libroBook3","#coverBook"],0
   ,{display:"inLine", position:"relative"})
   gsap.to(["#baseBook","#coverBook"],0,{width:"10vh"})
   gsap.to(["#libroBook1","#libroBook2","#libroBook3"],0,{width:"6vh"})
   gsap.to(["#coverBook"],0,{y:"-7vh", x:"1vh"})
   gsap.to(["#baseBook"],0,{y:"11vh"})
   gsap.to(["#libroBook1","#libroBook2","#libroBook3",
   "#libroBook4"],0,{x:"4vh",y:"-2vh"})

  gsap.to(["#libroBook1"],2,{y:"8.5vh", ease:"bounce", delay:"0"})
  gsap.to(["#libroBook2"],1.5,{y:"5.75vh", ease:"bounce", delay:"1.0"})
  gsap.to(["#libroBook3"],1,{y:"3vh",ease:"bounce",delay:"2.0"})
  gsap.to(["#coverBook"],2,{y:"0vh", ease:"bounce",delay:"2.5"})
  
 
  

  }

}

// o(["#libroBook1"],0,{left:"-5vh",top:"-2.0vh"})
//    gsap.to(["#libroBook2"],0,{left:"-9vh",top:"-2.0vh"})
//    gsap.to(["#libroBook3"],0,{left:"-13vh",top:"-2.0vh"})

//   gsap.to(["#libroBook3"],1.5,{,top:"2.6vh", ease:"bounce"})
//   gsap.to(["#libroBook2"],1,{left:"-14vh",top:"1.vh",ease:"bounce",delay:".8"})
//   gsap.to(["#libroBook1"],0.7,{left:"-8vh",top:"-0.6vh", ease:"bounce", delay:"1.4"})
//   gsap.to(["#coverBook"],2,{top:"0vh", ease:"bounce",delay:"1.4"})
//   gsap.to(["#archie"],2,{left:"-15vh"})
  
