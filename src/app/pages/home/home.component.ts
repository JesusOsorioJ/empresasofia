import { Component,ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import {gsap} from 'gsap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  ph : number = 0;
  h : number = window.innerHeight; 
  p : number = 0
  @ViewChild("myElem") MyProp: ElementRef
  


  public onScroll(){
    this.ph = window.pageYOffset/window.innerHeight
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  
    if (Math.abs(this.ph-this.p)>=0.1&&this.p!=this.ph){
      let ent 
      if(this.ph-this.p>0){ ent = Math.ceil(this.ph)}else{
         ent = Math.floor(this.ph)
      }
      this.p = this.ph
      console.log("www",document.getElementsByTagName("app-home1"))
      let vare 
      // const bottomOfPage = Selection('#bottomOfPage');
      vare = document.querySelector('#myElem');
     
      
      // window.scroll(0, ent*this.h);
      // console.log( " ent", ent )
      // Header scroll
      // let vh = ent*100+"vh"
      // let vhi = (ent*100-10)+"vh"
      // gsap.to("#headerword",1, {y:vhi})  
      // gsap.to("#headerword",1.5, {y:vh}) 
      
    }

  }
}
