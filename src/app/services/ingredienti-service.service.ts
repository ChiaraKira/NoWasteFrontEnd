import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingrediente } from '../model/ingrediente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientiServiceService {

  ingredienti?: Ingrediente[] = [];

  constructor(private http : HttpClient) { }


  getIngredienti() : Observable <Ingrediente[]> {
    var token = sessionStorage.getItem("token");

    if (!token) {
      token = "admin-2";
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    return this.http.get<Ingrediente[]>("http://localhost:8080/api/ingredients/allIngredients", { headers });
  }

  getIngredientiById(id : number) : Observable <Ingrediente> {
    var token = sessionStorage.getItem("token");

    if (!token) {
      token = "admin-2";
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    return this.http.get<Ingrediente>("http://localhost:8080/api/ingredients/ingredientById?id=" + id, { headers });
  }
  
}
