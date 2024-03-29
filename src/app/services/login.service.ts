import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  checkLogin(){
    var token = sessionStorage.getItem("token")

    if(token == null){
      token = "";
    }

    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );

    this.http.get("http://localhost:8080/api/login/checkLogin", {headers}).subscribe(risposta =>{
      var check : boolean = risposta as boolean;
      if(check){
        if(token?.split("-")[0] == "USER"){
          //Pagina home-page
          this.router.navigateByUrl('home-page');
        }
        else if(token?.split("-")[0] == "ADMIN"){
          //alert("Sei un admin")
          //routing admin
        }
      }
      else{
        this.router.navigateByUrl('');
      }
    })
  }

  public logout()
  {
    sessionStorage.clear();
    this.checkLogin();
  }

}
