import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/* Efecto animations */
import { fadeIn } from '../animations.component';
/* Model User*/
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeIn]
})
export class RegisterComponent implements OnInit, OnChanges {
  public title:string;
  public user: User;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Registro de Usuarios';
    this.user = new User('','','','','','user','','')

   }

  ngOnInit(): void {
    console.log('Componete register.component cargado');
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onSubmit(){

  }
}
