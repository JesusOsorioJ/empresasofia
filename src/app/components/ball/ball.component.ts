import { Component, Input } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html'
})
export class BallComponent {

  ph: number = 0;
  enter: boolean = true;
  @Input() text: string = "";

  ngOnInit() {
    gsap.to(["#r1", "#r2", "#r3", "#text"], 0
      , { display: "inLine", position: "relative" })
    gsap.to("#r1", 0, { left: "15vh" })
    gsap.to("#r2", 0, { left: "1vh" })
    gsap.to("#text", 0, { left: "-13vh" })
  }

  public onScroll() {
    this.ph = window.pageYOffset / window.innerHeight

    if (this.ph>1.7&&this.enter==true) {
      this.enter=false
      gsap.to("#r1", 5, { rotation: 360 })
      gsap.to("#r2", 5, { rotation: -360 })
      gsap.to("#text", 5, { color:"#a8b2d1" })
    }
    

  }
}
