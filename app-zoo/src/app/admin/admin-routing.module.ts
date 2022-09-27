import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { AddComponent } from './components/main/add/add.component';
import { EdidComponent } from './components/main/edid/edid.component';
import { ListComponent } from './components/main/list/list.component';
import { MainComponent } from './components/main/main.component';


const adminRoutes: Routes = [
  {
    path:'admin-panel',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path:'list', component: ListComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit', component: EdidComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
