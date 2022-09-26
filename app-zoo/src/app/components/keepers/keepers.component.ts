import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.scss']
})
export class KeepersComponent implements OnInit {
  title = 'KEEPERS';
  constructor() { }

  ngOnInit(): void {
    console.log('Componente Cuidadores Lanzado!!!')
  }

}
