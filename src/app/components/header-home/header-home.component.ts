import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Ingrediente } from 'src/app/model/ingrediente';
import { IngredientiService } from 'src/app/services/ingredienti.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent {

  // @Input() ingrediente?: Ingrediente;

  // ingredienti : any;

  ingredienti? : Ingrediente[];

  constructor(public ingredientiService:IngredientiService)
  {
    this.fechtIngredienti();
  }

  ngOnInit():void
  {
    // this.ingredientiService.getIngredienti();
    // console.log(this.ingredientiService.getIngredienti());

   


  }

  fechtIngredienti() : void {
    this.ingredientiService.getIngredienti().subscribe((data: any[]) => {
        this.ingredienti = data;
    })
  }

}
