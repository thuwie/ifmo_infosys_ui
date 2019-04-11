import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { Employee } from '../_models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiHost: string;
  private apiRoute = 'emp';

  constructor() {
    this.apiHost = environment.apiHost;
  }

  async getAll(): Promise<Employee[]> {
    let employees;
    try {
      employees = await axios.get(`${this.apiHost}/emp/all`);
      employees = employees.data;
      console.log(employees);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    return employees;
  }

  async getById(id: number): Promise<Employee> {
    let user;
    try {
      user = await axios.get(`${this.apiHost}/emp/get/${id}`);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    return user;
  }

  async create(employee: Employee): Promise<any> {
    try {
      console.log(`Create employee`);
      console.log(employee);
      const res = await axios.post(`${this.apiHost}/emp/addEmp`, employee);
      console.log(res);
    } catch (error) {
      console.error(error);
      throw error;
    }

  }

  async update(employee: Employee): Promise<any> {
    try {
      await axios.post(`${this.apiHost}/emp/updateEmp`, employee);
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
