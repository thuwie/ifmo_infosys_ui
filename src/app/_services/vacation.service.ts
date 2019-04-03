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

  async getById(id: number): Promise<Vacation> {
    let user;
    try {
      user = await axios.get(`${this.apiHost}/vacation/get/:${id}`);
    } catch (error) {
      console.error(error.message);
      user = null;
    }
    return user;
  }

}
