import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyportfolioRoutingModule } from './myportfolio-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MyportfolioRoutingModule
  ]
})
export class MyportfolioModule { }
