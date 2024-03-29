import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ingrediente } from 'src/app/model/ingrediente';
import { IngredientiService } from 'src/app/services/ingredienti-service.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {

  ingredienti?: Ingrediente[];

  constructor(private http:HttpClient, private ingredientiService:IngredientiService)
  {
    this.http = http;
  }

  ngOnInit():void
  {
    this.ingredientiService.getIngredienti();
    console.log(this.ingredientiService.getIngredienti());
  }


}
