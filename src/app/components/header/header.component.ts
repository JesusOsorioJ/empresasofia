import { Component } from '@angular/core';
import { gsap } from 'gsap'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

 
  isList: number;
    isMenu: boolean = false;
    isSearch: boolean = false;

    constructor() {}
    

  show: boolean = false
  
  p = 0
  public closeopen() {
    this.show = !this.show

  }
  ngOnInit() {
    // Animation open and close header 
    gsap.to("#namemain",{y:"-9vh", duration:0})
    gsap.to("#namemain",{y:"0vh", duration:2, stagger:0.2, ease:"bounce"})
    setInterval(() => {
      //header quiet but not at the top
      if (window.pageYOffset / window.innerHeight < 0.1) {
        gsap.to(["#ArchieBoxheader", "#textheader"],
          { color: "white", duration: 2, stroke: "white" })
        gsap.to("#header", {
          border: "1px solid transparent ",background: "#991e1e",
          duration: 2,
        })
      } else if (window.pageYOffset / window.innerHeight != this.p) {
        gsap.to(["#ArchieBoxheader", "#textheader"],
          { color: "white", duration: 2 })
        gsap.to("#header", {
          background: "#991e1e", borderBottom: "1px solid #e2e8f0 ",
          duration: 2
        })
      }
      this.p = window.pageYOffset / window.innerHeight
    }, 1000)
  }

  onScroll() {
    //Header in move
    if (window.pageYOffset / window.innerHeight > 0.1) {
      gsap.to(["#ArchieBoxheader", "#textheader"], {
          color: "transparent",
        duration: 2, stroke: "transparent"
      })
      gsap.to("#header", {
        background: "transparent", borderBottom: "1px solid transparent ",
        duration: 2
      })

    }
  }
}