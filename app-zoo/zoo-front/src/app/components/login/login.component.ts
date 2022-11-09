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
  public identity: any;
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

    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
  }

  onSubmit(){
    //autenticar el usuario y obtener el objeto user
    this._userService.sigIn(this.user).subscribe(
      ress => {
        this.identity = ress.user
        if(this.identity){

          localStorage.setItem('identity', JSON.stringify(this.identity))

          //conseguir token
          this._userService.sigIn(this.user, true).subscribe(
            ress =>{
              this.token = ress.token;
              if(!this.token){
                alert('El token no se ha generado');

              }else{
                localStorage.setItem('token', this.token)

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

