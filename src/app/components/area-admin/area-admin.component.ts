import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-area-admin',
  templateUrl: './area-admin.component.html',
  styleUrls: ['./area-admin.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(800)),
    ])
  ]
})
export class AreaAdminComponent {

  currentStep = 1;

  steps = [
    { title: 'Crea ricetta', subtitle: 'Aggiungi la tua ricetta', fields: [
      { type: 'text', name: 'nome', placeholder: 'Nome Ricetta' },
      { type: 'text', name: 'istruzioni', placeholder: 'Istruzioni' },
      { type: 'text', name: 'portata', placeholder: 'Primo piatto..' },
      { type: 'number', name: 'difficolta', placeholder: '1', min: '1', max: '3'},
      {type: 'number', name: 'difficolta', placeholder: '1', min: '10', max: '180'}
    ]},
    { title: 'Social Profiles', subtitle: 'Your presence on the social network', fields: [
      { type: 'text', name: 'twitter', placeholder: 'Twitter' },
      { type: 'text', name: 'facebook', placeholder: 'Facebook' },
      { type: 'text', name: 'gplus', placeholder: 'Google Plus' }
    ]},
    { title: 'Create your account', subtitle: 'Fill in your credentials', fields: [
      { type: 'text', name: 'email', placeholder: 'Email' },
      { type: 'password', name: 'pass', placeholder: 'Password' },
      { type: 'password', name: 'cpass', placeholder: 'Confirm Password' }
    ]}
  ];

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
