import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../../../../_models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-add-employee-dialog',
  templateUrl: './admin-add-employee-dialog.component.html',
})
export class AdminAddEmployeeDialogComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AdminAddEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) {
  }

  isLinear = false;
  usernameFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  roleFormGroup: FormGroup;
  employeeIdFormGroup: FormGroup;

  ngOnInit(): void {
    this.usernameFormGroup = this._formBuilder.group({
      usernameCtrl: ['', Validators.required]
    });
    this.passwordFormGroup = this._formBuilder.group({
      passwordCtrl: ['', Validators.required]
    });
    this.roleFormGroup = this._formBuilder.group({
      roleCtrl: ['', Validators.required]
    });
    this.employeeIdFormGroup = this._formBuilder.group({
      employeeCtrl: ['', Validators.required]
    });
  }

  onSubmitClick(): void {
    console.log('clikc');
    const username: string = this.usernameFormGroup.value.usernameCtrl;
    console.log(this.usernameFormGroup.value.usernameCtrl);
    const password: string = this.passwordFormGroup.value.passwordCtrl;
    const roleName: string = this.roleFormGroup.value.roleCtrl;
    const employeeId: string = this.employeeIdFormGroup.value.employeeCtrl;
    const user = {
      username: username,
      password: password,
      roleName: roleName,
      employeeId: employeeId
    };
    console.log(user);
    this.dialogRef.close(user);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}