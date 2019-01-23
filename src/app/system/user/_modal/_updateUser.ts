import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'update-user',
    templateUrl: './_user.html'
})
export class UpdateUser {

    user:User;

    constructor(
        private userService: UserService,
        private toastr: ToastrService,
        public dialogRef: MatDialogRef<UpdateUser>,
        @Inject(MAT_DIALOG_DATA) public data) {
            this.user = JSON.parse(JSON.stringify(data.user));
    }

    close(): void {
        this.dialogRef.close();
    }

    save():void{
        this.userService.updateUser(this.user).subscribe(result =>{
            this.toastr.success('修改用户成功');
            this.close();
        });
    }
}