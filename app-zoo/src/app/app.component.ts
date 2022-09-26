import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'app-zoo';
  emailContacto: string = '';

  ngOnInit(){

  }

  ngDoCheck(): void {
    this.emailContacto = localStorage.getItem('emailContacto') ?? "";
  }

  borrarDatos(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = '';
  }
}
