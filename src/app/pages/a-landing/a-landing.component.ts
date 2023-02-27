import { Component } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);


@Component({
  selector: 'app-a-landing',
  templateUrl: './a-landing.component.html'
})
export class ALandingComponent {
  
  foto=["book.jpg","fondo2.jpg","office.png"]
  

  ngOnInit() {
    

  }
}
