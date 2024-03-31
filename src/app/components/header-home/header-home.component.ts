import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Ingrediente } from 'src/app/model/ingrediente';
import { IngredientiService } from 'src/app/services/ingredienti.service';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css'],
  animations: [
    trigger('typewriter', [
      state('start', style({})),
      transition('* => start', [
        animate('2s', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HeaderHomeComponent {

  // @Input() ingrediente?: Ingrediente;

  // ingredienti : any;

  ingredienti? : Ingrediente[];

  text = '';
  constructor(public ingredientiService:IngredientiService)
  {
    this.fechtIngredienti();
    this.typeWriterEffect("Cerca una ricetta con gli ingredienti a tua disposizione!!");

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

  typeWriterEffect(text: string) {
    let index = 0;
    const interval = setInterval(() => {
      this.text += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100);
  }

 
}
