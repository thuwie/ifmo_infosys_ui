import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/User';
import { UserService } from '../../../_services/user.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
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
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private userService: UserService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.getAllUsers();
  }

  async getAllUsers() {
    try {
      this.users = await this.userService.getAll();
    } catch (error) {
      console.error(error.message);
    }
    this.isLoading = false;
  }

  async getUser(id: number) {
    let user: User = null;
    try {
      user = await this.userService.getById(id);
    } catch (error) {
      console.error(error.message);
    }
  }

}
