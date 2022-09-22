import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  users: any;
  ngOnInit(): void {
    this.showUsers();
  }

  showUsers(){
    this.users = this.userService.listUsers().subscribe(user=>{
      this.users = user;
      console.log(this.users);
    })
  }

  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe(
      res => {
        this.users = this.users.filter((a:any) => a.id == id);
      }
    );
    this.router.navigateByUrl('/');
  }
}
