import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginStatus } from 'src/app/model/login-status';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
  formRegistrati : FormGroup;
  formAccedi : FormGroup;
  login : boolean = true;

  constructor(private http : HttpClient, private formBuilder : FormBuilder,
    private router : Router, private loginService : LoginService) {
      loginService.checkLogin();
      
      this.formAccedi = formBuilder.group({
        username : ["", Validators.required], 
        password : ["", Validators.required]
      })

      this.formRegistrati = formBuilder.group({
        nome: ["", Validators.required], // Campo obbligatorio
        cognome : ["", Validators.required], 
        username : ["", Validators.required], 
        password : ["", Validators.required], 
        confirmPassword : ["", Validators.required] 
      });
      
  }

  submitAccedi(){
    const formValues = this.formAccedi.value;
    const headers = {'Content-Type' : 'application/json'}
    const body = JSON.stringify(formValues);

    if (this.formAccedi.valid) {
      this.http.post("http://localhost:8080/api/login/signin", body, {'headers' : headers})
        .subscribe({
          next: (risposta: any) => {
            this.login = false;
            var loginStatus: LoginStatus = risposta as LoginStatus;
            sessionStorage.setItem("token", loginStatus.token);
        
            if (loginStatus.ruolo == "USER" || loginStatus.ruolo == "ADMIN") {
              // Pagina user o ADMIN
              this.router.navigateByUrl('home-page');
              window.location.reload(); //aggiunger route
            } else {
              alert("ERRORE: Ruolo non valido");
            }
          },
          error: (error: any) => {
            if (error.status === 404) {
              // Utente non trovato
              alert("Utente non trovato. Controlla le credenziali e riprova.");
            } else {
              // Gestione degli altri tipi di errori
              alert("Si è verificato un errore durante l'accesso: " + error.message);
            }
            console.error(error); // Stampa l'errore nella console per eventuali debug
          }
        });
    } else {
      alert("Username e password non validi");
    }
  }


  submitRegistrati(){
    const formValues = this.formRegistrati.value;
    const headers = {'Content-Type' : 'application/json'};
    const body = JSON.stringify(formValues);
    
   if(formValues.password == formValues.confirmPassword && this.formRegistrati.valid){
     this.http.post("http://localhost:8080/api/login/registerUser", body, {'headers' : headers}).subscribe(risposta => {
       var ris : boolean = risposta as boolean;
         if(ris){
           //Pagina login
           alert("Registrazione Effettuata");
           this.router.navigateByUrl('');
           window.location.reload();
         }
         else{
           alert("ERRORE registrazione");
           this.formRegistrati.reset(); 
         }
     })
   }
   else{
     alert("Si prega di compilare tutti i campi e assicurarsi che le password combacino.");
   }
 }

  // Pulsanti per far spostare la greenbox a sinistra e destra
  //Andando a modifigare il contenuto della box
  greenboxTransform = 'translateX(0%)';
  signinVisible = true;
  signupVisible = false;

  onSignupClick() {
    this.greenboxTransform = 'translateX(80%)';
    this.signinVisible = false;
    this.signupVisible = true;
    this.formAccedi.reset();
  }

  onSigninClick() {
    this.greenboxTransform = 'translateX(0%)';
    this.signupVisible = false;
    this.signinVisible = true;
  }

}
