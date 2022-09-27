import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  title = 'NGZOO';
  constructor() { }

  ngOnInit(): void {
    console.log('HomeComponent Lanzado')
  }

}
