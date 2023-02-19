import { Component } from '@angular/core';
import {gsap} from 'gsap'

@Component({
  selector: 'app-diagonal',
  templateUrl: './diagonal.component.html'
})
export class DiagonalComponent {

  ngOnInit(){

    gsap.to("#optionlanding",0,{ y:"10vh", display:"none"})
    gsap.to("#optionlanding",0,{display:"flex", delay:1})
    gsap.to("#optionlanding",2,{y:"0vh", delay:1})


     }

}
