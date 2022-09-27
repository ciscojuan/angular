import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminRoutingModule } from '../../admin-routing.module';



import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EdidComponent } from './edid/edid.component';
import { MainComponent } from './main.component';




@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EdidComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class AdminModule { }
