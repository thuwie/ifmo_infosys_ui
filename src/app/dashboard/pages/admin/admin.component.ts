import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/User';
import { UserService } from '../../../_services/user.service';

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
