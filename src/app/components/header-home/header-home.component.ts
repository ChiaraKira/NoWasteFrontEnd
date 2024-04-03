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
    ]),
    trigger('plateAnimation', [
      state('out', style({
        transform: 'scale(0)',
        opacity: 0
      })),
      state('in', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('out => in', [
        animate('0.5s')
      ]),
      // transition('in => out', [
      //   animate('0.5s')
      // ])
    ])
  ]
})
export class HeaderHomeComponent {

  // @Input() ingrediente?: Ingrediente;

  // ingredienti : any;
  animationState: string = 'in';
  plates: string[] = [ 'assets/img/piatto2.png'];
  currentPlateIndex: number = 0;
  intervalId: any;

  ingredienti? : Ingrediente[];

  text = '';
  constructor(public ingredientiService:IngredientiService, public http: HttpClient)
  {
    this.http = http;
    this.fechtIngredienti();
    this.typeWriterEffect("Cerca una ricetta con gli ingredienti a tua disposizione!!");

  }

  ngOnInit():void
  {
    // this.ingredientiService.getIngredienti();
    // console.log(this.ingredientiService.getIngredienti());
    this.startAutoChange();
   


  }

  ngOnDestroy(): void {
    this.stopAutoChange();
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

  togglePlate() {
    this.animationState = (this.animationState === 'in' ? 'out' : 'in');
    setTimeout(() => {
      this.nextPlate();
    }, 500); // Imposta il timeout in base alla durata dell'animazione
  }

  nextPlate() {
    this.currentPlateIndex = (this.currentPlateIndex + 1) % this.plates.length;
  }

  startAutoChange() {
    this.intervalId = setInterval(() => {
      this.togglePlate();
    }, 2000); // Cambia l'immagine ogni 3 secondi, puoi regolare l'intervallo a tuo piacimento
  }

  stopAutoChange() {
    clearInterval(this.intervalId);
  }
 
}
