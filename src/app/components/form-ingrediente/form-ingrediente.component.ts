import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingrediente } from 'src/app/model/ingrediente';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-ingrediente',
  templateUrl: './form-ingrediente.component.html',
  styleUrls: ['./form-ingrediente.component.css']
})
export class FormIngredienteComponent {
  ingredienteForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.ingredienteForm = formBuilder.group(
      {
        nome: ["", Validators.required],
        senzaGlutine: "",
        vegetariano: "",
        vegano: ""
      }
    );
  }

  add() {
    const formValues = this.ingredienteForm.value;
    const nuovoIngrediente: Ingrediente = {
      id: 0,
      nome: formValues.nome,
      senzaGlutine: formValues.senzaGlutine,
      vegetariano: formValues.vegetariano,
      vegano: formValues.vegano
    };

    var token = sessionStorage.getItem('token');

    const headers = new HttpHeaders(
      { 'Content-Type': 'application/json', 'token': token as string }
    );

    if (this.ingredienteForm.valid) {
      this.http.post("http://localhost:8080/api/ingredients/addIngredient", nuovoIngrediente, { headers }).subscribe(risposta => {
        var ris: boolean = risposta as boolean;
        if (ris) {
          //Pagina login
          alert("Ingrediente inserito con successo");
          this.ingredienteForm.reset();
        }
        else {
          alert("Ingrediente non inserito");
        }
      });
    }
  }
}
