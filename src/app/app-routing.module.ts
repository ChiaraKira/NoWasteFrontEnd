import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { DettaglioRicettaComponent } from './components/dettaglio-ricetta/dettaglio-ricetta.component';
import { ListaRicetteComponent } from './components/lista-ricette/lista-ricette.component';
import { PaginaNoWasteComponent } from './components/pagina-no-waste/pagina-no-waste.component';
import { PaginaPortataComponent } from './components/pagina-portata/pagina-portata.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { IngredientiComponent } from './components/ingredienti/ingredienti.component';
import { AreaAdminComponent } from './area-admin/area-admin.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dettaglio-ricetta', component: DettaglioRicettaComponent},
  {path: 'lista-ricette', component: ListaRicetteComponent},
  {path: 'no-waste', component: PaginaNoWasteComponent},
  {path: 'portata', component: PaginaPortataComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'ingredienti' , component: IngredientiComponent},
  {path: 'area-admin' , component: AreaAdminComponent},
  {path: 'app-component' , component: AppComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
