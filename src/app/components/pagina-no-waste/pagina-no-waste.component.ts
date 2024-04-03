import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-no-waste',
  templateUrl: './pagina-no-waste.component.html',
  styleUrls: ['./pagina-no-waste.component.css']
})
export class PaginaNoWasteComponent {

  constructor(private http: HttpClient, public route: ActivatedRoute){
    this.http = http;
 
  }

}
