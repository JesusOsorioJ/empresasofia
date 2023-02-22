import { Component } from '@angular/core';
import { databases } from './database'

@Component({
  selector: 'app-f-opiniones',
  templateUrl: './f-opiniones.component.html'
})
export class FOpinionesComponent {
  data = databases
}
