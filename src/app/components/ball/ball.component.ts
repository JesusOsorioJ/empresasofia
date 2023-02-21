import { Component, Input } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html'
})
export class BallComponent {

  ph: number = 0;
  enter: boolean = true;
  @Input() text: string = ""


  ngOnInit() {
    // Animation home5 ball valores
    gsap.to(["#r1", "#r2", "#textball"], 0
      , { display: "inLine", position: "relative" })
    gsap.to("#r1", 0, { top: "8rem" })
    gsap.to("#r2", 0, { top: "1rem" })
    gsap.to("#textball", 0, { top: "-7rem" })

    gsap.to("#r1", {
      onStart: () => this.ballMove(),
      scrollTrigger: {
        trigger: "#r1", start: "center 80%", end: "center 0%",
        toggleActions: "play reverse play reverse",
      },
    });
  }

  public ballMove() {
    gsap.to("#r1", 5, { rotation: 270 })
    gsap.to("#r2", 5, { rotation: -267 })
    gsap.to("#textball", 5, { color: "#495670" })
  }
}
