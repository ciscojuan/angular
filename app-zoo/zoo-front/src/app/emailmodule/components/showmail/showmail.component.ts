import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showmail',
  template: `
          <h4>{{title}}</h4>
          <span *ngIf="emailContacto">
            <strong>Email de contacto:</strong> {{emailContacto}}
            <button (click)="borrarDatos()">Borrar email de Contacto</button>
          </span>
  `
})
export class ShowMailComponent implements OnInit {
  title = 'Mostrar Email';
  emailContacto: any;
  constructor() { }

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto')
  }

 borrarDatos(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = '';
  }

}
