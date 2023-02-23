import { Component } from '@angular/core';
import { databases } from './database'

@Component({
  selector: 'app-f-opiniones',
  templateUrl: './f-opiniones.component.html'
})
export class FOpinionesComponent {
  data = databases
  ancho=window.innerWidth
  height=400
  cellWidth=300
  margin=20
  autoplay=true
  autoplayInterval=2000
  pauseOnHover=true
  dots=true
  loop=true
  
  ngOnInit(){
    console.log("window.innerWidth",window.innerWidth);
    
if (window.innerWidth<=425){
this.cellWidth=window.innerWidth*0.70
this.height=700*320/innerWidth
}else if ((window.innerWidth<=1050)){
  this.cellWidth=window.innerWidth/2*0.8
    this.height=700*768/innerWidth
}else{
  this.cellWidth=window.innerWidth/3*0.8
    this.height=700

}
  }
}
