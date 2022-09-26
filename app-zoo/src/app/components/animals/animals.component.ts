import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  title = 'ANIMALES'
  constructor() { }

  ngOnInit(): void {
    console.log('Componente animales Lanzado!!!')
  }

}
