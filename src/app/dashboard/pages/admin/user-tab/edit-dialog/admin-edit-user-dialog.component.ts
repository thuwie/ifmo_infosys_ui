import { Component, Inject } from '@angular/core';
import { User } from '../../../../../_models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-admin-edit-user-dialog',
  templateUrl: './admin-edit-user-dialog.component.html',
})
export class AdminEditUserDialogComponent {

  constructor(public dialogRef: MatDialogRef<AdminEditUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
