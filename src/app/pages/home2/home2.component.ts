import { Component } from '@angular/core';

import {gsap} from 'gsap'

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html'
})
export class Home2Component {
  

  ngOnInit(){
    // (this.firstsec).scrollIntoView({behavior: "smooth"});
    let ph = window.pageYOffset/window.innerHeight

    // console.log("ph",this.firstsec);
  gsap.to("#parrafohome2",0,{ y:"10vh", display:"none"})
  
  }
  
  // gsap.to("#home2text", {
  //   color:"transparent",
  //    x:"15vh",
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: "#home2text",
  //       start: "center 60%",
  //       end: "center 0%",
  //       toggleActions: "reverse play reverse play",
  //     },
  //   });
  //  gsap.to("#home2item", {
  //   color:"transparent",
  //    x:"15vh",
  //     duration: 2,
  //     stagger:0.3,
  //     scrollTrigger: {
  //       trigger: "#home2item",
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

  public onScroll(){
    let ph = window.pageYOffset/window.innerHeight

    console.log("ph", ph);
    
    // if( ph>0.9){
    //   gsap.to("#ArchieBox",{x:"10vh", y:"-55vh",scale:1})
    //   gsap.to(["#Archie","#Archie1"],0,{fontSize:"4.7vw"})
    //   gsap.to(["#ProcesosArchie"],0,{y:"-1.5vh"})
    //  gsap.to(["#Archie1"],0,{x:"-1.5vh"})
    //  gsap.to(["#ArchieBox"],0,{color:"white"})
    
    //  gsap.to("#ArchieBox",4,{scale:1.4,x:"30vh"})
    //  gsap.to(["#Archie","#ProcesosArchie"],4,{color:"gray",yoyo:true, repeat:1})
    //  gsap.to(["#Archie1"],4,{color:"transparent"})
    //  gsap.to("#dia1",3,{x:"0.68vh", y:"-0.84vh", yoyo:true, repeat:1})
    // gsap.to("#dia2",2,{x:"-0.92vh", y:"1.15vh", yoyo:true, repeat:1})
    //  gsap.to("#dia3",3,{x:"-1.6vh", y:"2vh", yoyo:true, repeat:1})
    //  gsap.to("#dia4",1,{x:"0.89vh", y:"-1.13vh", yoyo:true, repeat:1})
    //  gsap.to(["#dia1","#dia2","#dia3","#dia4"],2,{color:"grey"})
     
    // }
  }
}
