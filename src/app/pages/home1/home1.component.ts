import { Component } from '@angular/core';
import {gsap} from 'gsap'

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html'
})
export class Home1Component {
  ngOnInit(){
    gsap.to("#optionlanding",0,{ y:"10vh"})
    gsap.to("#optionlanding",2,{y:"0vh", delay:1})
  
    
  }
  
}
