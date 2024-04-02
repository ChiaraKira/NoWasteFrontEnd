import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    console.log(body);
    this.http.post("http://localhost:8080/api/login/signin", body, {'headers' : headers}).subscribe(risposta => {
      this.login = false;
      var loginStatus : LoginStatus = risposta as LoginStatus;
      console.log(loginStatus);
      sessionStorage.setItem("token", loginStatus.token)
      console.log(sessionStorage.getItem("token"));
     
      if(loginStatus.ruolo == "USER"){
        //Pagina user
        this.router.navigateByUrl('home-page');
        window.location.reload(); //aggiunger route

      } else if(loginStatus.ruolo == "ADMIN"){
        this.router.navigateByUrl('area-admin');
        window.location.reload();
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
      console.log(body);
       if(ris){
         //Pagina login
         this.router.navigateByUrl(''); // routing da rendirizzare al login
       }
       else{
         alert("ERRORE registrazione");
         this.formRegistrati.patchValue(
           {
            nome: "",
            cognome : "",
            username : "",
            password : "",
            confirmPassword : ""
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
