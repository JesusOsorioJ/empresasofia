import { Component } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-diagonal',
  templateUrl: './diagonal.component.html'
})
export class DiagonalComponent {
  enter = true
  ngOnInit() {
    // Close animation diagonal home2
    gsap.to("#ArchieBox0", { height: "70vh" })
    gsap.to("#ArchieBox", {
      y: "-200%",
      color: "gray", scale: 1
    })
    gsap.to(["#Archie", "#Archie1"], 0, { fontSize: "4.7vw" })
    gsap.to(["#ProcesosArchie"], 0, { y: "-1.5vh" })
    gsap.to(["#Archie1"], 0, { x: "17vh" })
    gsap.to(["#ArchieBox"], 0, {})

    gsap.to("#ArchieBox", {
      onStart: () => this.diagonalMove(),
      scrollTrigger: {
        trigger: "#ArchieBox", start: "top 95%", end: "top 0%",
        toggleActions: "play reverse play reverse",
      },
    });
  }

  public diagonalMove() {
    // Open animation diagonal home2
    gsap.to("#ArchieBox", 4, { scale: 1.4, x: "10vh" })
    gsap.to(["#Archie", "#ProcesosArchie"], 7, { color: "white" })
    gsap.to("#dia1", 3, { x: "0.68vh", y: "-0.84vh", yoyo: true, repeat: 1 })
    gsap.to("#dia2", 2, { x: "-0.92vh", y: "1.15vh", yoyo: true, repeat: 1 })
    gsap.to("#dia3", 3, { x: "-1.6vh", y: "2vh", yoyo: true, repeat: 1 })
    gsap.to("#dia4", 1, { x: "0.89vh", y: "-1.13vh", yoyo: true, repeat: 1 })
  }
}
