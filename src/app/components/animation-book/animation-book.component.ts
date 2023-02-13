import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-animation-book',
  templateUrl: './animation-book.component.html'
})
export class AnimationBookComponent {

  ngOnInit(){
   gsap.to("#box",0,{display:"inLine",})
   gsap.to(["#archie"],0,{display:"inLine",width:"20vh", position:"relative"})

   gsap.to(["#baseBook","#libroBook1","#libroBook2","#libroBook3","#coverBook"],0
   ,{display:"inLine", position:"relative"})
   gsap.to(["#baseBook","#coverBook"],0,{width:"10vh"})
   gsap.to(["#libroBook1","#libroBook2","#libroBook3"],0,{width:"6vh"})
   gsap.to(["#coverBook"],0,{top:"-5vh"})
   gsap.to(["#baseBook"],0,{left:"-28vh",top:"5.5vh"})
   gsap.to(["#libroBook1"],0,{left:"-8vh",top:"-6.0vh"})
   gsap.to(["#libroBook2"],0,{left:"-14vh",top:"-6.0vh"})
   gsap.to(["#libroBook3"],0,{left:"-20vh",top:"-6.0vh"})

  gsap.to(["#libroBook3"],1.5,{left:"-20vh",top:"2.6vh", ease:"bounce"})
  gsap.to(["#libroBook2"],1,{left:"-14vh",top:"1.vh",ease:"bounce",delay:".8"})
  gsap.to(["#libroBook1"],0.7,{left:"-8vh",top:"-0.6vh", ease:"bounce", delay:"1.4"})
  gsap.to(["#coverBook"],2,{top:"0vh", ease:"bounce",delay:"1.4"})
  gsap.to(["#archie"],2,{left:"-25vh"})
  

  }

}
