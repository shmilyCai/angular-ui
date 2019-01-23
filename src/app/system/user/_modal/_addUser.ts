import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'add-user',
    templateUrl: './_user.html'
})
export class AddUser {

    user = new User;


    constructor(
        private userService: UserService,
        private toastr: ToastrService,
        public dialogRef: MatDialogRef<AddUser>,
        @Inject(MAT_DIALOG_DATA) public data) {
    }

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        this.userService.addUser(this.user).subscribe(result => {
            this.toastr.success('新建用户成功');
            this.close();
        });
    }
}