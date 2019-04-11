import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { VacationService } from '../../../_services/vacation.service';
import { Vacation } from '../../../_models/Vacation';
import { MatDialog, MatDialogConfig, MatSort, MatTableDataSource } from '@angular/material';
import { AddVacationDialogComponent } from './add-dialog/add-vacation-dialog.component';

@Component({
  selector: 'app-view',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css']
})
export class VacationsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  private dataSourceVacations = new MatTableDataSource<Vacation>();
  private isLoading: boolean;
  private employeeId: number;
  private displayedColumns = [
    'vacationId',
    'employeeId',
    'typeId',
    'vacationStart',
    'vacationDays',
    'vacationStatus'
  ];

  constructor(private vacationService: VacationService,
              public dialog: MatDialog) {
    this.isLoading = false;
    this.employeeId = 5; // TODO highly hardcoded, very smooth
  }

  ngOnInit() {
    this.getAllVacations();
  }

  ngAfterViewInit() {
    this.dataSourceVacations.sort = this.sort;
  }

  async getAllVacations() {
    try {
      this.dataSourceVacations.data = await this.vacationService.getAll() as Vacation[];
    } catch (error) {
      console.error(error.message);
    }
  }

  async addVacation(): Promise<any> {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AddVacationDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(async vacation => {
      if (vacation) {
        console.log('The dialog was closed');
        console.log(vacation);
        try {
          await this.vacationService.create(vacation);
        } catch (error) {

          console.error(error.message);
        }
      } else {
        console.log('woopsie');
      }
    });
  }

}
