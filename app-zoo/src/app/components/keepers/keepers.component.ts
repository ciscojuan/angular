import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations.component';
@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.scss'],
  animations: [fadeIn]
})
export class KeepersComponent implements OnInit {
  title = 'KEEPERS';
  constructor() { }

  ngOnInit(): void {
    console.log('Componente Cuidadores Lanzado!!!')
  }

}
