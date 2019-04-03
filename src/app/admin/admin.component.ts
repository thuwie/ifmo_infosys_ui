import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../entity/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private users: User[];
  private isLoading: boolean;
  private displayedColumns = [
    'Id',
    'EmployeeId',
    'Username',
    'Password'
    ];

  constructor(private apiService: ApiService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.getAllUsers();
  }

  async getAllUsers() {
    try {
      this.users = await this.apiService.getAllUsers();
    } catch (error) {
      console.error(error.message);
    }
    this.isLoading = false;
  }

}
