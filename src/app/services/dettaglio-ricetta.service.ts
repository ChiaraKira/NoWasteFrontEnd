import { Injectable, Input, OnInit } from '@angular/core';
import { Ricetta } from '../model/ricetta';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DettaglioRicettaService implements OnInit {

  @Input() ricetta?: Ricetta;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   
  }

  // getRicetta(id: number): Ricetta {
  //   var token = sessionStorage.getItem("token");
  
  //   if (!token) {
  //     token = "admin-2";
  //   }
  
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'token': token
  //   });
  
  //   let ricetta: Ricetta;
  
  //   this.http.get("http://localhost:8080/api/recipe/recipeById?id=" + id, { headers }).subscribe(
  //     (response: Ricetta) => {
  //       ricetta = response;
  //     },
  //     (error) => {
  //       console.error('Error fetching recipe:', error);
  //     }
  //   );
  
  // }

  getData(id : number): Observable<any> {
    var token = sessionStorage.getItem("token");
  
    if (!token) {
      token = "admin-2";
    }
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });
    return this.http.get<any>('http://localhost:8080/api/recipe/recipeById?id=' + id , {headers}).pipe(
      catchError(error => {
        console.error('Error fetching data: ', error);
        return of([]); // or any default value/error handling strategy
      })
    );
  }

  
 
  getSteps(ricetta : Ricetta): string[] {
    if (ricetta && ricetta.istruzioni) {
      return ricetta.istruzioni.split("\n");
    }
    return [];
  }


}
