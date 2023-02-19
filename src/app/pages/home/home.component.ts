
import { Router } from '@angular/router';
// import { Component } from '@angular/core';
import {gsap} from 'gsap'
import { Component,ViewChild, ElementRef} from '@angular/core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  @ViewChild('home2') myNameElem: ElementRef;
  inputball = ["holamundo"]
  
  ok = true
  
  ph : number = 0;
  h : number = window.innerHeight; 
  p : number = 0
  // @ViewChild("myElem") MyProp: ElementRef

  public onclick(){
    this.myNameElem.nativeElement.scrollIntoView({behavior: "smooth"})
  }

  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(["#ArchieBoxheader","#textheader"],0,
  //  {y:"-15vh",display:"none"})
  //   gsap.to("#home2 #ArchieBoxheader,#home2 #textheader",0,
  // { display:"flex"})
    gsap.to("#home2 #ArchieBoxheader",2,{ y:"0vh",delay:"1.5", ease:"bounce"})
    
    
    // gsap.to("#home2 #textheader",2,{ y:"0vh",delay:"1.5"})

    // gsap.to("#home2 #textheader", {
    //  y:"-15vh",
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: "#home2 #textheader",
    //     start: "center 15%",
    //     end: "center 11%",
    //     toggleActions: "reverse play reverse play",
    //     markers: {
    //       startColor: "purple",
    //       endColor: "fuchsia",
    //       fontSize: "3rem",
    //     },
    //   },
    // });
    
  
   

      // gsap.to("#parrafohome3", {
      //   color:"transparent",
      //    x:"-15vh",
      //     duration: 2,
      //     stagger:0.3,
      //     scrollTrigger: {
      //       trigger: "#parrafohome3",
      //       start: "center 60%",
      //       end: "center 0%",
      //       toggleActions: "reverse play reverse play",
      //       markers: {
      //         startColor: "purple",
      //         endColor: "fuchsia",
      //         fontSize: "3rem",
      //       },
      //     },
      //   });
  }
  
  public async onScroll(){
    this.ph = window.pageYOffset/window.innerHeight
    // console.log(this.myNameElem.nativeElement);
    if (this.ph>1.9){
      
      
    this.myNameElem.nativeElement.scrollIntoView({behavior: "auto"})
    await setTimeout(()=>(console.log("ss")),3000)
    console.log("paso por auqi");
    this.ok=true
  }
  
    if (Math.abs(this.ph-this.p)>=0.2&&this.p!=this.ph){
     
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

}