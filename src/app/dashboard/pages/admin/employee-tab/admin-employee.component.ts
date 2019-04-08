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
    'Employeename',
    'Password',
    'Role',
    'Employee',
    'Actions'
  ];
  private name: string;

  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog) {
    this.isLoading = true;
    this.name = 'az';
  }

  ngOnInit() {
    this.getAllEmployees();
  }

  ngAfterViewInit() {
    this.dataSourceEmployee.sort = this.sort;
  }

  async getAllEmployees(): Promise<any> {
    try {
      const Employees = await this.employeeService.getAll() as Employee[];
      let data = Employees.map(employee => {
        employee.firstName = employee.firstName ? employee.firstName : ' - // -';
        employee.secondName = employee.secondName ? employee.secondName : ' - // -';
        return employee;
      });
      console.log(data);
      data = data.sort((a, b) => a.employeeId - b.employeeId);
      console.log(data);
      this.dataSourceEmployee.data = data;
      // this.Employees.sort = this.sort;
    } catch (error) {
      console.error(error.message);
    }
    this.isLoading = false;
  }
}

