import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CaroselComponent } from './components/carosel/carosel.component';
import { CardComponent } from './components/card/card.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottoneComponent } from './components/bottone/bottone.component';

import {FormBuilder, FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';


import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ListaRicetteComponent } from './components/lista-ricette/lista-ricette.component';
import { PaginaNoWasteComponent } from './components/pagina-no-waste/pagina-no-waste.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { DettaglioRicettaComponent } from './components/dettaglio-ricetta/dettaglio-ricetta.component';
import { StelleComponent } from './components/stelle/stelle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FiltriComponent } from './components/filtri/filtri.component';
import { CommentoComponent } from './components/commento/commento.component';
import { IngredientiComponent } from './components/ingredienti/ingredienti.component';

import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './components/login/login.component';
import { ListaCommentiComponent } from './components/lista-commenti/lista-commenti.component';
import { SceltaUtenteComponent } from './components/scelta-utente/scelta-utente.component';
import { RispostaUtenteComponent } from './components/risposta-utente/risposta-utente.component';
import { AreaAdminComponent } from './area-admin/area-admin.component';
import { PopupFormComponent } from './components/popup-form/popup-form.component';





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
    FooterComponent,
    ListaRicetteComponent,
    PaginaNoWasteComponent,
    DettaglioRicettaComponent,
    StelleComponent,
    HomePageComponent,
    FiltriComponent,
    CommentoComponent,
    IngredientiComponent,
    LoginComponent,
    ListaCommentiComponent,
    SceltaUtenteComponent,
    RispostaUtenteComponent,
    AreaAdminComponent,
    PopupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    JsonPipe,
    MatCheckboxModule
   
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
