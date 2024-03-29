import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { DettaglioRicettaComponent } from './components/dettaglio-ricetta/dettaglio-ricetta.component';
import { ListaRicetteComponent } from './components/lista-ricette/lista-ricette.component';
import { PaginaNoWasteComponent } from './components/pagina-no-waste/pagina-no-waste.component';
import { PaginaPortataComponent } from './components/pagina-portata/pagina-portata.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dettaglio-ricette', component: DettaglioRicettaComponent},
  {path: 'lista-ricette', component: ListaRicetteComponent},
  {path: 'no-waste', component: PaginaNoWasteComponent},
  {path: 'portata', component: PaginaPortataComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
