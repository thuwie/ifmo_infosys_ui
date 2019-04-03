import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: any = {};
  isLoading = false;
  error = '';

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    // TODO check for application local storage for a token.
    this.authService.logout();
  }

  async login() {
    this.isLoading = true;
    try {
      const result = await this.authService.login(this.model.username, this.model.password);
      if (result) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Username or password is incorrect';
        this.isLoading = false;
      }
    } catch (error) {
      console.error(error.message);
      this.error = error.message;
    }
  }
}
