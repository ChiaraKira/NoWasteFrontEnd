import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CaroselComponent } from './components/carosel/carosel.component';
import { CardComponent } from './components/card/card.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottoneComponent } from './components/bottone/bottone.component';


import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CategorieComponent } from './components/categorie/categorie.component';
import { BlogComponent } from './components/blog/blog.component';
import { VegetaliDiStagioneComponent } from './components/vegetali-di-stagione/vegetali-di-stagione.component';
import { FooterComponent } from './components/footer/footer.component';
import { DettaglioRicettaComponent } from './components/dettaglio-ricetta/dettaglio-ricetta.component';
import { StelleComponent } from './components/stelle/stelle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FiltriComponent } from './components/filtri/filtri.component';
import { IngredientiComponent } from './components/ingredienti/ingredienti.component';

import {MatListModule} from '@angular/material/list';
import { PaginaPortataComponent } from './components/pagina-portata/pagina-portata.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaroselComponent,
    CardComponent,
    HeaderHomeComponent,
    BottoneComponent,
    CategorieComponent,
    BlogComponent,
    VegetaliDiStagioneComponent,
    FooterComponent,
    DettaglioRicettaComponent,
    StelleComponent,
    HomePageComponent,
    FiltriComponent,
    IngredientiComponent,
    PaginaPortataComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule
   
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
