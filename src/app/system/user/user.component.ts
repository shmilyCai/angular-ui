import { Component, OnInit, ViewChild, Inject, Injector } from '@angular/core';
import { UserService } from '../../service/user.service'
import { User } from 'src/app/model/user';
import { ViewUser } from './_modal/_viewUser';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { UpdateUser } from './_modal/_updateUser';
import { ToastrService } from 'ngx-toastr';
import { AddUser } from './_modal/_addUser';
import swal from 'sweetalert';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  test: any;
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'tel', 'email', 'desc', 'status', 'operate'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource<User>(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  //表格过滤
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //删除用户
  delete(user: User): void {
    swal({
      title: "你确定要删除该用户吗?",
      text: "你真的确定要删除该用户吗?",
      icon: "error",
      dangerMode: true,

    }).then(willDelete => {
      if (willDelete) {
        this.userService.deleteUser(user).subscribe(result => {
          this.toastr.success('删除用户成功');
          this.getUsers();
        });
      }
    });

  }

  //获取单个用户展示
  get(user: User): void {
    // this.test = this.userService.getUser(user.id).subscribe(result =>{});
    //打开弹出框
    const dialogRef = this.dialog.open(ViewUser, {
      width: '350px',
      data: user
    });
    //关闭弹出框后的操作
    dialogRef.afterClosed().subscribe(result => { });
  }

  //更新
  update(user: User): void {
    //打开弹出框
    const dialogRef = this.dialog.open(UpdateUser, {
      width: '350px',
      data: { type: 'update', user: user }
    });
    //关闭弹出框后的操作
    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  //新建
  new(): void {
    //打开弹出框
    const dialogRef = this.dialog.open(AddUser, {
      width: '350px',
      data: { type: 'add' }
    });
    //关闭弹出框后的操作
    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

}



