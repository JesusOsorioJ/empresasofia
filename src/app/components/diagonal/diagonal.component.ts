import { Component } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-diagonal',
  templateUrl: './diagonal.component.html'
})
export class DiagonalComponent {

  ngOnInit() {
    // Close animation diagonal home2
    gsap.to("#ArchieBox", { x: "10vh", y: "-55vh", scale: 1 })
    gsap.to(["#Archie", "#Archie1"], 0, { fontSize: "4.7vw" })
    gsap.to(["#ProcesosArchie"], 0, { y: "-1.5vh" })
    gsap.to(["#Archie1"], 0, { x: "-1.5vh" })
    gsap.to(["#ArchieBox"], 0, { color: "white" })
  }
  
  public onScroll() {
    let ph = window.pageYOffset / window.innerHeight
    if (ph > 0.9) {
      // Open animation diagonal home2
      gsap.to("#ArchieBox", 4, { scale: 1.4, x: "30vh" })
      gsap.to(["#Archie", "#ProcesosArchie"], 4, { color: "gray", yoyo: true, repeat: 1 })
      gsap.to(["#Archie1"], 4, { color: "transparent" })
      gsap.to("#dia1", 3, { x: "0.68vh", y: "-0.84vh", yoyo: true, repeat: 1 })
      gsap.to("#dia2", 2, { x: "-0.92vh", y: "1.15vh", yoyo: true, repeat: 1 })
      gsap.to("#dia3", 3, { x: "-1.6vh", y: "2vh", yoyo: true, repeat: 1 })
      gsap.to("#dia4", 1, { x: "0.89vh", y: "-1.13vh", yoyo: true, repeat: 1 })
      gsap.to(["#dia1", "#dia2", "#dia3", "#dia4"], 2, { color: "grey" })
    }
  }
}
