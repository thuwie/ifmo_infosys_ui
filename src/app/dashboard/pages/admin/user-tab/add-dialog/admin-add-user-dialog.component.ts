import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../../../../_models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-add-user-dialog',
  templateUrl: './admin-add-user-dialog.component.html',
})
export class AdminAddUserDialogComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AdminAddUserDialogComponent>,
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
    const employeeId: number = parseInt(this.employeeIdFormGroup.value.employeeCtrl, 10);

    const user = {
      username: username,
      password: password,
      roleName: roleName,
      employeeId: employeeId
    };
    this.dialogRef.close(user);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
