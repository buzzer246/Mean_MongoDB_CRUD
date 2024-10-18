import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Api4Component } from './api4/api4.component';
import { ContactComponent } from './contact/contact.component';


const allpages : Routes= [

        {path:"api4", component:Api4Component},
        {path:"contact",component: ContactComponent},
        {path:"", component:Api4Component} //http:4200/
  ];
@NgModule({
  declarations: [
    AppComponent,
    Api4Component,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allpages),
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
