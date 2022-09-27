import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  styles: ['']
})
export class AddComponent implements OnInit {
  title: string = 'Añadir Animales';
  constructor() { }

  ngOnInit(): void {
  }

}
