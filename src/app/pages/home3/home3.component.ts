import { Component } from '@angular/core';
import {gsap} from 'gsap'

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html'
})
export class Home3Component {

  // hola= ["compromiso", "integridad", "calidad"]

  ngOnInit(){

    // gsap.to("#parrafohome3",0,{ y:"10vh", display:"none"})
    // setInterval(this.ass
    //   , 1000);
      
    }

    public onshow (){
      // console.log(window.pageYOffset)
    }

    public onScroll(){
    let ph = window.pageYOffset/window.innerHeight

    

    
    if( ph>2){gsap.to("#parrafohome3",0,{display:"block", delay:1})
    gsap.to("#parrafohome3",2,{y:"0vh", delay:1})
    gsap.to("#home3  #ArchieBoxheader,#home3 #textheader",0,
  { display:"flex"})
     gsap.to("#home3  #ArchieBoxheader,#home3 #textheader",2,{ y:"0vh",color:"grey",delay:"1.5"})
 
  }
}}
