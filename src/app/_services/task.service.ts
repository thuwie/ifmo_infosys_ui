import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { Router } from '@angular/router';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public token: string;
  private apiHost: string;

  constructor(private router: Router) {
    this.apiHost = environment.apiHost;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  async initiateProcess(user: User): Promise<any> {
    try {
      const obj = await axios.post(`${this.apiHost}/processes/initiateVacation`, user);
      console.log(obj);
    } catch (error) {
      throw error;
    }
  }

  async getAllTasks(): Promise<any> {
    try {
      const obj = await axios.get(`${this.apiHost}/processes/getTasks`);
      console.log('getTasks');
      console.log(obj);
      return obj.data;
    } catch (error) {
      throw error;
    }
  }

  async approveTask(taskId: number): Promise<any> {
    try {
      const obj = await axios.post(`${this.apiHost}/processes/approveUserVacation/${taskId}`);
      console.log('approveTask');
      console.log(obj);
    } catch (error) {
      throw error;
    }
  }


}

