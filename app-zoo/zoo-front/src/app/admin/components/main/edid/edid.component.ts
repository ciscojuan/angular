import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-edid',
  templateUrl: './edid.component.html',
  styleUrls: ['./edid.component.scss']
})
export class EdidComponent implements OnInit {
  title: string = 'Edicion de Animales';
  constructor() { }

  ngOnInit(): void {
  }

}
