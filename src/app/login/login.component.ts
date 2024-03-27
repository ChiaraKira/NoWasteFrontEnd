import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor() {}

  greenboxTransform = 'translateX(0%)';
  signinVisible = true;
  signupVisible = false;

  onSignupClick() {
    this.greenboxTransform = 'translateX(80%)';
    this.signinVisible = false;
    this.signupVisible = true;
  }

  onSigninClick() {
    this.greenboxTransform = 'translateX(0%)';
    this.signupVisible = false;
    this.signinVisible = true;
  }

}
