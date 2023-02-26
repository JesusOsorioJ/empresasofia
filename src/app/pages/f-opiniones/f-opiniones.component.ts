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
    

  }
}
