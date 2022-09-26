import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'CONTACTO';
  emailContacto: string = '';
  constructor() { }

  ngOnInit(): void {
    console.log('Componente Contacto Lanzado!!!')
  }

  guardarEmail(){
    localStorage.setItem('emailContacto',this.emailContacto)
  }


}
