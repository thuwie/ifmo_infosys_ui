import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { Router } from '@angular/router';
const FileSaver = require('file-saver');

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  public token: string;
  private apiHost: string;

  constructor(private router: Router) {
    this.apiHost = environment.apiHost;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  async getAll(): Promise<boolean> {
    try {
      const response = await axios.get(`${this.apiHost}/processes/allTasks`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async postStatus(taskId: number, status: boolean): Promise<boolean> {
    try {
      const response = await axios.post(`${this.apiHost}/processes/approveUserVacation/${taskId}`, {
        approveStatus: status
      });
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async getReport(taskId: number): Promise<any> {
    try {
      const response = await axios.get(`${this.apiHost}/processes/report/get/${taskId}`, {responseType: 'blob'});
      FileSaver.saveAs(response.data, 'filename.pdf');
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
}

