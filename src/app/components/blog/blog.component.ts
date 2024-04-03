import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [
    trigger('moveIn', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class BlogComponent implements OnInit {

  constructor(private http: HttpClient, public route: ActivatedRoute) { 
    this.http = http;
  }

  ngOnInit(): void {
  }

}
