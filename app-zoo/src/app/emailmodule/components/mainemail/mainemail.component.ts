import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mainmail',
  template: `
          <div class="card bg-primary">
            <h2>{{title}}</h2>
            <showmail></showmail>
            <savemail></savemail>
          </div>
  `
})
export class MainMailComponent {
  title = 'Modulo de email';
  emailContacto: string = '';
  constructor() { }

}
