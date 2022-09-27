import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations.component';
@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  title = 'ANIMALES'
  constructor() { }

  ngOnInit(): void {
    console.log('Componente animales Lanzado!!!')
  }

}
