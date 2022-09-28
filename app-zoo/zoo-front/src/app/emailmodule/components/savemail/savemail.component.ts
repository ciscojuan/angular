import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'savemail',
  template: `
          <h4>{{title}}</h4>
          <input type="text" [(ngModel)]="emailContacto">
          <button (click)="guardarEmail()">Guradar Datos</button>
  `
})
export class SaveMailComponent {
  title = 'Guardar Email';
  emailContacto: string = '';
  constructor() { }

  guardarEmail(){
    localStorage.setItem('emailContacto',this.emailContacto)
  }

}
