import { Component, Inject } from '@angular/core';
import { User } from '../../../../_models/User';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-admin-edit-dialog',
  templateUrl: './admin-edit-dialog.component.html',
})
export class AdminEditDialogComponent {

  constructor(public dialogRef: MatDialogRef<AdminEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
