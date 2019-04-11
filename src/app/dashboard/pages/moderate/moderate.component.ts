import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { Process } from '../../../_models/Process';
import { ManagerService } from '../../../_services/manager.service';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-moderate',
  templateUrl: './moderate.component.html',
  styleUrls: ['./moderate.component.css']
})
export class ModerateComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  private dataSourceProceses = new MatTableDataSource<Process>();
  private isLoading: boolean;
  private role: string;
  private displayedColumns = [
    'Id',
    'processStateDefinition',
    'ownerId',
    'requestedDays',
    'employeeId',
    'vacationId',
    'requestStatus',
    'assignedManagerName',
    'lastStateManagerId',
    'lastStateManagerName',
    'vacationStartDate',
    'Actions'
  ];
  private name: string;

  constructor(private managerService: ManagerService,
              private authService: AuthService,
              public dialog: MatDialog) {
    this.isLoading = true;
    this.role = this.authService.getRole();

  }

  ngOnInit() {
    this.getAllProcesses();
  }

  ngAfterViewInit() {
    this.dataSourceProceses.sort = this.sort;
    console.log(this.role);
  }

  async getAllProcesses(): Promise<any> {
    try {
      const tasks = await this.managerService.getAll() as Process[];
      console.log(tasks);
      this.dataSourceProceses.data = tasks;
      // this.users.sort = this.sort;
    } catch (error) {
      console.error(error.message);
    }
    this.isLoading = false;
  }

  private async setStatus(row: Process, status: boolean) {
    try {
      const response = await this.managerService.postStatus(row.taskId, status);
    } catch (error) {
      console.error(error.message);
    }
  }

  /*async getUser(row: Proceses): Promise<any> {
   let user = null;
   try {
   user = await this.userService.getById(row.userId);
   console.log(user.data);
   } catch (error) {
   console.error(error.message);
   }
   }*/

  /*async editUser(row: User): Promise<any> {
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
   }*/
}
