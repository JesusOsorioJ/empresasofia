import { Component, Input } from '@angular/core';
import { gsap } from 'gsap'


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input() width: string = ""
  @Input() height: string = ""
  ngOnInit(){
    gsap.to("#iconApp", {
      fill:"#af3939",x:"-5rem",duration:2,
      scrollTrigger: {
        trigger: "#iconApp", start: "top 90%", end: "top 0%",
        toggleActions: "play none none none",
      },
    });
  
  }
}
