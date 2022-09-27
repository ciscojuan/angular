import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainMailComponent } from './mainemail/mainemail.component';
import { ShowMailComponent } from './showmail/showmail.component';
import { SaveMailComponent } from './savemail/savemail.component';



@NgModule({
  declarations: [
    ShowMailComponent,
    SaveMailComponent,
    MainMailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainMailComponent
  ]
})
export class MailModule { }
