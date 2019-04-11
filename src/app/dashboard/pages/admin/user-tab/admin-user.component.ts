import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../../_models/User';
import { UserService } from '../../../../_services/user.service';
import {
  MatDialog, MatDialogConfig, MatSort, MatTableDataSource
} from '@angular/material';
import { AdminEditUserDialogComponent } from './edit-dialog/admin-edit-user-dialog.component';
import { AdminAddUserDialogComponent } from './add-dialog/admin-add-user-dialog.component';
import { AuthService } from '../../../../_services/auth.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  private dataSourceUser = new MatTableDataSource<User>();
  private isLoading: boolean;
  private displayedColumns = [
    'Id',
    'Username',
    'Password',
    'Role',
    'Employee',
    'Actions'
  ];
  private name: string;

  constructor(private userService: UserService,
              private authService: AuthService,
              public dialog: MatDialog) {
    this.isLoading = true;
    this.name = 'az';
    console.log(this.authService.getRole());
  }

  ngOnInit() {
    this.getAllUsers();
  }

  ngAfterViewInit() {
    this.dataSourceUser.sort = this.sort;
  }

  async getAllUsers(): Promise<any> {
    try {
      const users = await this.userService.getAll() as User[];
      let data = users.map(user => {
        user.firstName = user.firstName ? user.firstName : ' - // -';
        user.secondName = user.secondName ? user.secondName : ' - // -';
        return user;
      });
      console.log(data);
      data = data.sort((a, b) => a.userId - b.userId);
      console.log(data);
      this.dataSourceUser.data = data;
      // this.users.sort = this.sort;
    } catch (error) {
      console.error(error.message);
    }
    this.isLoading = false;
  }

  async getUser(row: User): Promise<any> {
    let user = null;
    try {
      user = await this.userService.getById(row.userId);
      console.log(user.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async editUser(row: User): Promise<any> {
    console.log(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    const dialogRef = this.dialog.open(AdminEditUserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(async updatedUser => {
      if (updatedUser) {
        console.log('The dialog was closed');
        console.log(updatedUser);
        await this.userService.update(updatedUser);
      } else {
        console.log('woopsie');
      }

    });
  }

  async addUser(): Promise<any> {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AdminAddUserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(async user => {
      if (user) {
        console.log('The dialog was closed');
        console.log(user);
        try {
          await this.userService.createUser(user);
        } catch (error) {

          console.error(error.message);
        }
      } else {
        console.log('woopsie');
      }
    });
  }
}

