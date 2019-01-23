import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { User } from 'src/app/model/user';

@Component({
    selector: 'view-user',
    templateUrl: './_viewUser.html'
})
export class ViewUser {

    constructor(
        public dialogRef: MatDialogRef<ViewUser>,
        @Inject(MAT_DIALOG_DATA) public data: User) {
    }

    close(): void {
        this.dialogRef.close();
    }
}