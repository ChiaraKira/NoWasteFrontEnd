import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingrediente } from 'src/app/model/ingrediente';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-ingrediente',
  templateUrl: './form-ingrediente.component.html',
  styleUrls: ['./form-ingrediente.component.css']
})
export class FormIngredienteComponent {
  ingredienteForm : FormGroup;

  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.ingredienteForm = formBuilder.group(
      {nome:"", senzaGlutine:"",vegetariano:"",vegano:""}
      );
  }

  add(){
    const formValues = this.ingredienteForm.value;
    const nuovoIngrediente: Ingrediente = {
      id : 0,
      nome: formValues.nome,
      senzaGlutine: formValues.senzaGlutine,
      vegetariano: formValues.vegetariano,
      vegano: formValues.vegano
    };

    var token = sessionStorage.getItem('token');
    if (token == null) {
      token = "admin-2"; //da rimuovere
    }

    const headers = new HttpHeaders(
      { 'Content-Type': 'application/json', 'token': token as string }
    );
    

    this.http.post("http://localhost:8080/api/ingredients/addIngredient", nuovoIngrediente, { headers }).subscribe(risposta => {
      var ris : boolean = risposta as boolean;
       if(ris){
         //Pagina login
         this.router.navigateByUrl('home-page'); // routing da rendirizzare al login
       }
       else{
        alert("Ingrediente non inserito");
       }
    });
  }
}
