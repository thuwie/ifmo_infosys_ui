import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../../../../_models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../../../../../_models/Employee';
@Component({
  selector: 'app-admin-add-employee-dialog',
  templateUrl: './admin-add-employee-dialog.component.html',
})
export class AdminAddEmployeeDialogComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AdminAddEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee) {
  }

  isLinear = false;
  firstNameGroup: FormGroup;
  secondNameGroup: FormGroup;
  occupationIdGroup: FormGroup;
  vacationDaysGroup: FormGroup;

  ngOnInit(): void {
    this.firstNameGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required]
    });
    this.secondNameGroup = this._formBuilder.group({
      secondNameCtrl: ['', Validators.required]
    });
    this.occupationIdGroup = this._formBuilder.group({
      occupationIdCtrl: ['', Validators.required]
    });
    this.vacationDaysGroup = this._formBuilder.group({
      vacationDaysCtrl: ['', Validators.required]
    });
  }

  onSubmitClick(): void {
    const firstName: string = this.firstNameGroup.value.firstNameCtrl;
    const secondName: string = this.secondNameGroup.value.secondNameCtrl;
    const occupationId: number = parseInt(this.occupationIdGroup.value.occupationIdCtrl, 10);
    const vacationDays: number = parseInt(this.vacationDaysGroup.value.vacationDaysCtrl, 10);

    const employee = {
      firstName: firstName,
      secondName: secondName,
      occupationId: occupationId,
      vacationDays: vacationDays
    };
    console.log(employee);
    this.dialogRef.close(employee);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
