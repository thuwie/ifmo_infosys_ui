import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../../../_models/Employee';
import { EmployeeService } from '../../../../_services/employee.service';
import {
  MatDialog, MatDialogConfig, MatSort, MatTableDataSource
} from '@angular/material';
import { AdminEditEmployeeDialogComponent } from './edit-dialog/admin-edit-employee-dialog.component';
import { AdminAddEmployeeDialogComponent } from './add-dialog/admin-add-employee-dialog.component';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})
export class AdminEmployeeComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  private dataSourceEmployee = new MatTableDataSource<Employee>();
  private isLoading: boolean;
  private displayedColumns = [
    'Id',
    'Occupation',
    'FirstName',
    'SecondName',
    'VacationDays',
    'Actions'
  ];
  private name: string;

  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.getAllEmployees();
  }

  ngAfterViewInit() {
    this.dataSourceEmployee.sort = this.sort;
  }

  async getAllEmployees(): Promise<any> {
    try {
      let data = await this.employeeService.getAll() as Employee[];
      console.log(data);
      data = data.sort((a, b) => a.employeeId - b.employeeId);
      console.log(data);
      this.dataSourceEmployee.data = data;
    } catch (error) {
      console.error(error.message);
    }
    this.isLoading = false;
  }

  async addEmployee(): Promise<any> {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AdminAddEmployeeDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(async employee => {
      if (employee) {
        console.log('The dialog was closed');
        console.log(employee);
        try {
          await this.employeeService.create(employee);
        } catch (error) {

          console.error(error.message);
        }
      } else {
        console.log('woopsie');
      }
    });
  }
}

