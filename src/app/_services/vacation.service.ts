import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { Vacation } from '../_models/Vacation';

@Injectable({
  providedIn: 'root'
})
export class VacationService {
  private apiHost: string;

  constructor() {
    this.apiHost = environment.apiHost;
  }

  async getAll(): Promise<Vacation[]> {
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

  async create(vacation): Promise<any> {
    try {
      console.log(`Create vacation`);
      console.log(vacation);
      vacation.employeeId = parseInt(vacation.employeeId, 10);
      console.log(typeof vacation.employeeId);
      const res = await axios.post(`${this.apiHost}/processes/vacationProcess`, vacation);
      console.log(res);
    } catch (error) {
      console.error(error);
      throw error;
    }

  }

}
