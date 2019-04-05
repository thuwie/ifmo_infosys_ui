import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../_models/User';
import { UserService } from '../../../_services/user.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //@ViewChild(MatSort) sort: MatSort;

  private users: User[];
  private isLoading: boolean;
  private displayedColumns = [
    'Id',
    'EmployeeId',
    'Username',
    'Password',
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

  async getAllUsers() {
    try {
      this.users = await this.userService.getAll();
      //this.users.sort = this.sort;
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

  openDialog(row: User): void {
    console.log(row);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    const dialogRef = this.dialog.open(AdminDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(updatedUser => {
      console.log('The dialog was closed');
      console.log(updatedUser);
      this.userService.update(updatedUser);
    });
  }

}

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin.dialog.component.html',
})
export class AdminDialogComponent {

  constructor(public dialogRef: MatDialogRef<AdminDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
