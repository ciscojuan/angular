import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeIn } from '../animations.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeIn]
})
export class LoginComponent implements OnInit {
  public title : string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Login'
   }

  ngOnInit(): void {
    console.log('Componente login.component cargado')
  }

}
