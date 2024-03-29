import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingrediente } from '../model/ingrediente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientiService {

  ingredienti?: Ingrediente[] = [];
  ingredientiRicetta?: Ingrediente[] = [];

  constructor(private http : HttpClient) {
    this.http = http;
    this.getIngredienti();
   }


  getIngredienti() : Observable<any>{
    var token = sessionStorage.getItem("token");

    if (!token) {
      token = "admin-2";
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    

    return this.http.get<Ingrediente[]>('http://localhost:8080/api/ingredients/allIngredients', {headers});
  }

  getIngredientiById(id : number){
    var token = sessionStorage.getItem("token");

    if (!token) {
      token = "admin-2";
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    return this.http.get("http://localhost:8080/api/ingredients/ingredientById?id=" + id, { headers }).subscribe(risposta => {
      this.ingredientiRicetta = risposta as Ingrediente[]
    });
  }
  
  // getIngredienti() : Ingrediente[]{

  //   return this.ingredienti!.slice();
  // }


}
