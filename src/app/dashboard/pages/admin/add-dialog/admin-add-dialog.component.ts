import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../../../_models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-add-dialog',
  templateUrl: './admin-add-dialog.component.html',
})
export class AdminAddDialogComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AdminAddDialogComponent>,
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
    const user = {};
    user.username = this.usernameFormGroup.value.usernameCtrl;
    user.password = this.passwordFormGroup.value.passwordCtrl;
    user.roleName = this.roleFormGroup.value.roleCtrl;
    user.employeeId = this.employeeIdFormGroup.value.employeeCtrl;

    this.dialogRef.close(user);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
