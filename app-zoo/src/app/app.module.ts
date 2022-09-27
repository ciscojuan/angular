import { NgModule } from '@angular/core';
import { EditorModule } from "@tinymce/tinymce-angular"; //tynyMCW - rich text editor
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
//importar nuestro modulklo
import { MailModule } from './emailmodule/components/mail.module';
import { AdminModule } from './admin/components/main/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    KeepersComponent,
    ContactComponent,
    ShopComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    EditorModule,
    MailModule,
    AdminModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
