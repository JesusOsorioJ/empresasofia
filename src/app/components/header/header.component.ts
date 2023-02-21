import { Component } from '@angular/core';
import {gsap} from 'gsap'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  show : boolean = false
  p = 0
  public closeopen(){
    this.show=!this.show
    
  }
  ngOnInit(){
    setInterval(()=>{      
      if (window.pageYOffset / window.innerHeight<0.1){
        gsap.to(["#ArchieBoxheader","#textheader","#coverBook",
        "#libroBook1","#libroBook2","#libroBook3","#baseBook"], 
        {color:"white", duration:2, stroke:"white"})
        gsap.to("#header", {border:"1px solid transparent ",
        duration:2})
      }else if (window.pageYOffset / window.innerHeight != this.p){
        gsap.to(["#ArchieBoxheader","#textheader","#coverBook",
      "#libroBook1","#libroBook2","#libroBook3","#baseBook"], 
      {color:"gray", stroke:"gray", duration:2})
      gsap.to("#header", {background:"white", borderBottom:"1px solid #e2e8f0 ",
        duration:2})
      }
      
      this.p= window.pageYOffset / window.innerHeight
    },1000)
  }

  onScroll(){
    if (window.pageYOffset / window.innerHeight>0.1){
      gsap.to(["#ArchieBoxheader","#textheader","#coverBook",
      "#libroBook1","#libroBook2","#libroBook3","#baseBook"], {color:"transparent",  
      duration:2,stroke:"transparent"})
      gsap.to("#header", {background:"transparent", borderBottom:"1px solid transparent ",
        duration:2})

  }
}
}