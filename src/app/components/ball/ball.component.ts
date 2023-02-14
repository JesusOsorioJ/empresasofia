import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html'
})
export class BallComponent {

  rad = [100, 100, 100]
  rrr = "50,50 0,0 0,100"
  porcentaje = [[15,14,56,12]]
  por = [["","",""],["","",""],["","",""]]
  
  constructor() {

for(let i = 0; i < 2; i++) {
  let r = this.rad
  this.por[i][0]=r[i]/2+","+r[i]/2+" 0,0"+" 0,"+r[i]
  this.por[i][1]=r[i]/2+","+r[i]/2+" 0,"+r[i]+" "+r[i]+","+r[i]
  this.por[i][2]=r[i]/2+","+r[i]/2+" "+r[i]+","+r[i]+" "+r[i]+",0"
  console.log(this.por)
}
  
}

onInit(){

}
  

}
