import { Component, Input } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html'
})
export class BallComponent {

  ph : number = 0;
  h : number = window.innerHeight; 
  p : number = 0
  @Input() text : string = "";

  rad = [100, 100, 100]
  rrr = "50,50 0,0 0,100"
  porcentaje = [[15,14,56,12]]
  por = [["","",""],["","",""],["","",""]]

ngOnInit(){
  gsap.to(["#r1","#r2","#r3","#text"],0
  ,{display:"inLine", position:"relative"})
  gsap.to("#r1",0,{height:"10.2vw",left:"0.8vw",top:"-0.35vw"})
  gsap.to("#r2",0,{height:"12.4vw",left:"-10.4vw",top:"-0.15vw"})
  gsap.to("#r3",0,{height:"15vw",left:"-24vw"})
  gsap.to("#text",0,{height:"15vw",left:"-19.5vw"})
}

constructor() {}
  

  public onScroll(){
    this.ph = window.pageYOffset/window.innerHeight
    
    if (Math.abs(this.ph-this.p)>=0.7&&this.p!=this.ph){
      let ent 
      if(this.ph-this.p>0){ ent = Math.ceil(this.ph)}else{
         ent = Math.floor(this.ph)
      }
      this.p = this.ph
    }
      gsap.to("#r1",0.7,{rotation:(this.ph-this.p)*360})
      gsap.to("#r2",0.7,{rotation:(this.ph-this.p)*-360})
      gsap.to("#r3",0.7,{rotation:(this.ph-this.p)*360})
  
  }
}
