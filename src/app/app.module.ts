import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CaroselComponent } from './carosel/carosel.component';
import { CardComponent } from './card/card.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottoneComponent } from './bottone/bottone.component';


import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaroselComponent,
    CardComponent,
    HeaderHomeComponent,
    BottoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
