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
      throw error;
    }
    return users;
  }

  async getById(id: number): Promise<User> {
    let user;
    try {
      user = await axios.get(`${this.apiHost}/user/get/${id}`);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    return user;
  }

  // async create(user: User): any {
  //
  // }

  async update(user: User): Promise<any> {
    try {
      await axios.post(`${this.apiHost}/user/updateUser`, user);
    } catch (error) {
      throw error;
    }
  }

  /*async processes(user: User): Promise<any> {
    try {
      await axios.post(`${this.apiHost}/processes/initiateVacation`, user);
    } catch (error) {
      throw error;
    }
  }*/

  // async deleteById(id: number): any {
  //
  // }
}
