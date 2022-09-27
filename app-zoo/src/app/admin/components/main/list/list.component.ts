import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title: string = 'Listado de Animales';
  numbers = new Array(5);
  constructor() { }

  ngOnInit(): void {
  }

}
