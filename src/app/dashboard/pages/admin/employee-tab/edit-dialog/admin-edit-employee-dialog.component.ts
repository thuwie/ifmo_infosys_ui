import { Component, Inject } from '@angular/core';
import { User } from '../../../../../_models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-admin-edit-employee-dialog',
  templateUrl: './admin-edit-employee-dialog.component.html',
})
export class AdminEditEmployeeDialogComponent {

  constructor(public dialogRef: MatDialogRef<AdminEditEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
