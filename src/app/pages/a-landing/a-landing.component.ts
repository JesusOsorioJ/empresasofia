import { Component } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay,EffectFade } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay,EffectFade]);


@Component({
  selector: 'app-a-landing',
  templateUrl: './a-landing.component.html'
})
export class ALandingComponent {
  
  foto=["book.jpg","book.png","mision.jpg"]
  

  ngOnInit() {
    

  }
}
// EffectFade - Fade Effect module
// EffectCube - Cube Effect module
// EffectFlip - Flip Effect module
// EffectCoverflow
