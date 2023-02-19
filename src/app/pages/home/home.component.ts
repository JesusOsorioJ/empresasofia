
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
  @ViewChild('home1') home1: ElementRef;
  @ViewChild('home2') home2: ElementRef;
  @ViewChild('home3') home3: ElementRef;
  @ViewChild('home4') home4: ElementRef;

  inputball = ["holamundo"]
  
  var : number = 0
  ph : number = 0;
  enter : boolean = true; 
  
  public async onScroll(){
    this.ph = window.pageYOffset/window.innerHeight    
    if(this.enter==true){setTimeout(()=>
    {if(this.ph<0.3){this.home1.nativeElement.scrollIntoView({behavior: "smooth"})}
    if(this.ph>0.7&&this.ph<1.3){this.home2.nativeElement.scrollIntoView({behavior: "smooth"})}
    // if(this.var==2){this.home3.nativeElement.scrollIntoView({behavior: "smooth"})}
    // if(this.var==3){this.home4.nativeElement.scrollIntoView({behavior: "smooth"})}
    this.enter==false
  },600)
  setTimeout(()=>{this.enter==false},10000)}
   }
  
  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(["#ArchieBoxheader","#textheader"],0,
   {y:"-15vh",display:"none"})
    gsap.to("#home2 #ArchieBoxheader,#home2 #textheader",0,
  { display:"flex"})
    gsap.to("#home2 #ArchieBoxheader",2,{ y:"0vh",delay:"1.5", ease:"bounce"})
    this.ph = window.pageYOffset/window.innerHeight
    
    
  
    
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
  // }
  


  
    // this.ph = window.pageYOffset/window.innerHeight
    // console.log(this.myNameElem.nativeElement);
  //   if (this.ph>1.9){
      
      
  //   this.myNameElem.nativeElement.scrollIntoView({behavior: "auto"})
  //   setTimeout(()=>(console.log("ss")),3000)
  //   console.log("paso por auqi");
  //   this.ok=true
  // }
  
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


// setInterval(()=>{
//   this.ph = window.pageYOffset/window.innerHeight
//   console.log("this.ph-this.var",this.ph-this.var,"this.enter",this.enter);
//    if (Math.abs(this.ph-this.var)>0.6 && this.enter == true){
//     if(this.ph>this.var){this.var = Math.ceil(this.ph)}else{this.var = Math.floor(this.ph)}
//     console.log("pase por aqui",this.var);
//     this.enter = false
//     if(this.var==0){this.home1.nativeElement.scrollIntoView({behavior: "smooth"})}
//     if(this.var==1){this.home2.nativeElement.scrollIntoView({behavior: "smooth"})}
//     if(this.var==2){this.home3.nativeElement.scrollIntoView({behavior: "smooth"})}
//     if(this.var==3){this.home4.nativeElement.scrollIntoView({behavior: "smooth"})}}
//   },300)