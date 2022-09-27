import { Component, OnInit, DoCheck } from '@angular/core';
import { fadeIn } from './components/animations.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn]
})
export class AppComponent  {
  title = 'app-zoo';
  emailContacto: string = '';

}
