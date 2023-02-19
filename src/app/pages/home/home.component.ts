import {gsap} from 'gsap'
import { Component,ViewChild, ElementRef} from '@angular/core';
import { ScrollTrigger } from "gsap/ScrollTrigger";

  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  @ViewChild('home1') home1: ElementRef;
  @ViewChild('home2') home2: ElementRef;
  @ViewChild('home3') home3: ElementRef;
  @ViewChild('home4') home4: ElementRef;
  
  var : number = 0
  ph : number = 0;
  enter : boolean = true; 
  
  public async onScroll(){
  //   this.ph = window.pageYOffset/window.innerHeight    
  //   if(this.enter==true){setTimeout(()=>
  //   {if(this.ph<0.3){this.home1.nativeElement.scrollIntoView({behavior: "smooth"})}
  //   if(this.ph>0.7&&this.ph<1.3){this.home2.nativeElement.scrollIntoView({behavior: "smooth"})}
  //   if(this.ph>1.7&&this.ph<2.3){this.home3.nativeElement.scrollIntoView({behavior: "smooth"})}
  //   if(this.ph>2.7){this.home4.nativeElement.scrollIntoView({behavior: "smooth"})}
  //   this.enter==false
  // },600)
  // setTimeout(()=>{this.enter==false},10000)}
   }
  
  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger);
    
    this.ph = window.pageYOffset/window.innerHeight
    
    // if (Math.abs(this.ph-this.p)>=0.2&&this.p!=this.ph){
     
  //     gsap.to("#parrafohome2",0,{ y:"10vh", display:"none"})
  // gsap.to("#parrafohome2",0,{display:"block", delay:1})
  // gsap.to("#parrafohome2",2,{y:"0vh", delay:1})
  //     window.scroll(0, ent*this.h);
  //     console.log( " ent", ent )
  //     Header scroll
  //     let vh = ent*100+"vh"
  //     let vhi = (ent*100-10)+"vh"
  //     gsap.to("#headerword",1, {y:vhi})  
  //     gsap.to("#headerword",1.5, {y:vh}) 
      
    

  }

}


