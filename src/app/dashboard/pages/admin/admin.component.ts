import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../_models/User';
import { UserService } from '../../../_services/user.service';
import {
  MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef, MatSort, MatTableDataSource,
  PageEvent
} from '@angular/material';
import { AdminEditDialogComponent } from './edit-dialog/admin-edit-dialog.component';
import { AdminAddDialogComponent } from './add-dialog/admin-add-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
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
              public dialog: MatDialog) {
    this.isLoading = true;
    this.name = 'az';
  }

  ngOnInit() {
    this.getAllUsers();
  }

  ngAfterViewInit() {
    this.dataSourceUser.sort = this.sort;
  }

  async getAllUsers() {
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

  async getUser(row: User) {
    let user = null;
    try {
      user = await this.userService.getById(row.userId);
      console.log(user.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async editUser(row: User): void {
    console.log(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    const dialogRef = this.dialog.open(AdminEditDialogComponent, dialogConfig);

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

  async addUser(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AdminAddDialogComponent, dialogConfig);

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

