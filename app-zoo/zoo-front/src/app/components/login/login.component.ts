import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeIn } from '../animations.component';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService],
  animations: [fadeIn]
})
export class LoginComponent implements OnInit {
  public title : string;
  public user: User;
  public identity:any;
  public token: any;
  public status: string = '';
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Identificate';
    this.user = new User('','','','','','user','','');
   }

  ngOnInit(): void {
    console.log('Componente login.component cargado')
  }

  onSubmit(){
    //autenticar el usuario y obtener el objeto user
    this._userService.sigIn(this.user).subscribe(
      ress => {
        this.identity = ress.user
        if(this.identity){
          //Mostrar identity
          console.log(this.identity)
          //conseguir token
          this._userService.sigIn(this.user, true).subscribe(
            ress =>{
              this.token = ress.token;
              if(!this.token){
                alert('El token no se ha generado');

              }else{
                console.log(this.token);
                this.status = 'success'
              }
            },
            error =>{
              console.log(error)
            }
          );
        }
      },
      error =>{
        console.log(error)
        this.status = 'error'
      }

      )
    };
  }

