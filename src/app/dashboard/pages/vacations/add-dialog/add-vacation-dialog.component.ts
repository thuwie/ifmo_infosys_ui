import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-vacation-dialog',
  templateUrl: './add-vacation-dialog.component.html',
})
export class AddVacationDialogComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddVacationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee) {
  }

  isLinear = false;
  employeeId: FormGroup;
  typeGroup: FormGroup;
  vacationStartGroup: FormGroup;
  vacationDaysGroup: FormGroup;

  ngOnInit(): void {
    this.employeeId = this._formBuilder.group({
      employeeIdCtrl: ['', Validators.required]
    });
    this.typeGroup = this._formBuilder.group({
      typeCtrl: ['', Validators.required]
    });
    this.vacationStartGroup = this._formBuilder.group({
      vacationStartCtrl: ['', Validators.required]
    });
    this.vacationDaysGroup = this._formBuilder.group({
      vacationDaysCtrl: ['', Validators.required]
    });
  }

  onSubmitClick(): void {
    const employeeId: number = parseInt(this.employeeId.value.employeeIdCtrl, 10);
    const typeId: number = parseInt(this.typeGroup.value.typeCtrl, 10);
    const vacationStart: number = parseInt(this.vacationStartGroup.value.vacationStartCtrl, 10);
    const vacationDays: number = parseInt(this.vacationDaysGroup.value.vacationDaysCtrl, 10);

    const employee = {
      employeeId: employeeId,
      typeId: typeId,
      vacationStart: vacationStart,
      vacationDays: vacationDays
    };
    console.log(employee);
    this.dialogRef.close(employee);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
