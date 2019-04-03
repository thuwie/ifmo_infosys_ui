import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiHost: string;

  constructor() {
    this.apiHost = environment.apiHost;
  }

  async getAll(): Promise<User[]> {
    let users;
    try {
      users = await axios.get(`${this.apiHost}/user/all`);
      users = users.data;
    } catch (error) {
      console.error(error.message);
      users = null;
    }
    return users;
  }

  async getById(id: number): Promise<User> {
    let user;
    try {
      user = await axios.get(`${this.apiHost}/user/get/:${id}`);
    } catch (error) {
      console.error(error.message);
      user = null;
    }
    return user;
  }


}
