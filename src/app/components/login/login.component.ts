import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginStatus } from 'src/app/model/login-status';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formRegistrati : FormGroup;
  formAccedi : FormGroup;

  constructor(private http : HttpClient, private formBuilder : FormBuilder,
    private router : Router) {
      
      this.formAccedi = formBuilder.group({
        username: "",
        password: ""
      })

      this.formRegistrati = formBuilder.group({
        nome: "",
        cognome : "",
        username : "",
        password : "",
        confirmPassword : ""
      })
      
  }

  submitAccedi(){
    const formValues = this.formAccedi.value;
    const headers = {'Content-Type' : 'application/json'}
    const body = JSON.stringify(formValues);
    this.http.post("http://localhost:8080/api/login/signin", body, {'headers' : headers}).subscribe(risposta => {
      var loginStatus : LoginStatus = risposta as LoginStatus;
      
      sessionStorage.setItem("token", loginStatus.token)

      if(loginStatus.ruolo == "USER"){
        //Pagina user
        this.router.navigateByUrl('/'); //aggiunger route
      }
      else if(loginStatus.ruolo == "ADMIN"){
        //Pagina ADMIN 
      }

      else{
        alert("ERRORE ACCEDI");
        this.formAccedi.patchValue(
          {
            username : "",
            password : ""
          }
        )
      }

    })
  }


   submitRegistrati(){
     const formValues = this.formRegistrati.value;
     const headers = {'Content-Type' : 'application/json'}
     const body = JSON.stringify(formValues);
     this.http.post("http://localhost:8080/api/login/registerUser", body, {'headers' : headers}).subscribe(risposta => {
     var ris : boolean = risposta as boolean;

       if(ris){
         //Pagina login
         this.router.navigateByUrl('/'); // routing da rendirizzare al login
       }
       else{
         alert("ERRORE registrazione");
         this.formRegistrati.patchValue(
           {
             username : "",
             password : ""
           }
         )
       }

     })
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
  }

  onSigninClick() {
    this.greenboxTransform = 'translateX(0%)';
    this.signupVisible = false;
    this.signinVisible = true;
  }





}
