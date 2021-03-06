import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  private apiHost: string;
  private role: string

  constructor(private router: Router) {
    this.apiHost = environment.apiHost;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      /*const response = await axios.post(`${this.apiHost}/auth`, {
       username: username,
       password: password
       });
       const token = response.token;*/
      console.log('token');
      // console.log(token);
      this.role = username === 'user' ? 'Admin' : (username === 'user1' ? 'User' : 'Manager');
      const token = '{ username: "test", token: "token" }'; // Waiting for the API to return me a token.
      if (token) {
        this.token = token;

        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
        return true;
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  public getRole(): string {
    return this.role;
  }
}

