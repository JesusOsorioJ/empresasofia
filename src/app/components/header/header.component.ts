import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  show : boolean = false
  public closeopen(){
    this.show=!this.show
    
  }
}
