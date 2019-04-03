import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { User } from '../entity/User';
import { Vacation } from '../entity/Vacation';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiHost: string;

  constructor() {
    this.apiHost = environment.apiHost;
  }

  async getAllUsers(): Promise<User[]> {
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

  async getAllVacations(): Promise<Vacation[]> {
    let vacations;
    try {
      vacations = await axios.get(`${this.apiHost}/vacation/all`);
      vacations = vacations.data;
    } catch (error) {
      console.error(error.message);
      vacations = null;
    }
    return vacations;
  }

  async getUser(id: number): Promise<User> {
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
