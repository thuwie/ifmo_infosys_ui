import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { Employee } from '../_models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiHost: string;

  constructor() {
    this.apiHost = environment.apiHost;
  }

  async getAll(): Promise<Employee[]> {
    let users;
    try {
      users = await axios.get(`${this.apiHost}/user/all`);
      users = users.data;
      console.log(users);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    return users;
  }

  async getById(id: number): Promise<Employee> {
    let user;
    try {
      user = await axios.get(`${this.apiHost}/user/get/${id}`);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    return user;
  }

  async createUser(user: Employee): Promise<any> {
    try {
      console.log(`Create user`);
      console.log(user);
      const res = await axios.post(`${this.apiHost}/user/addUser`, user);
      console.log(res);
    } catch (error) {
      console.error(error);
      throw error;
    }

  }

  async update(user: Employee): Promise<any> {
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
