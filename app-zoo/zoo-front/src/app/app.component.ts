import { Component, OnInit, DoCheck } from '@angular/core';
import { fadeIn } from './components/animations.component';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title : string;
  public identity: any;
  emailContacto: string = '';

  constructor(
    private _userService : UserService
  ){
    this. title = 'app-zoo';
  }

    ngOnInit(){
      this.identity = this._userService.getIdentity()
    }
}
