import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/* Servicios */
import { UserService } from 'src/app/services/user.service';
/* Efecto animations */
import { fadeIn } from '../animations.component';
/* Model User*/
import { User } from 'src/app/models/user';
import { error } from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService],
  animations: [fadeIn]
})
export class RegisterComponent implements OnInit {

  public title:string;
  public user: User;
  public status:string;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService
  ) {
    this.title = 'Registro de Usuarios';
    this.user = new User('','','','','','user','','');
    this.status = '';


   }

  ngOnInit(): void {

  }

  onSubmit(registerForm:any){
     //el subscribe permite obtener la respuesta de la función
    console.log('parametros ingresados del fomulario de registro: '+this.user)
    this._userService.register(this.user).subscribe(
      res => {
        next:
        if(res.user && res.user._id){
          this.status = 'success'
          this.user = new User('','','','','','user','','');
          registerForm.reset();
        }else{
          this.status = 'error'
        }
        error: console.log(<any>error);
      })
  }
}
