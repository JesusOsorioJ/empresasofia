import { Component } from '@angular/core';
import { databases } from './database'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

@Component({
  selector: 'app-f-opiniones',
  templateUrl: './f-opiniones.component.html'
})
export class FOpinionesComponent {
  data = databases
  slidesPerView = 1
  ngOnInit() {
    if (window.innerWidth > 650) {
      this.slidesPerView = 2
    }
    if (window.innerWidth > 900) {
      this.slidesPerView = 3
    }
  }
}
