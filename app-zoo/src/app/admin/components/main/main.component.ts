import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html',

})
export class MainComponent  {
  title = 'Panel de Administracion de Usuario';
  emailContacto: string = '';

}
