import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  users: any;
  ngOnInit(): void {
  }

  add(userName:string, userEmail:string, userPassword:string){
    this.users = {
      'name': userName,
      'email': userEmail,
      'password': userPassword
    }
    this.userService.addUser(this.users as any).subscribe(user=>{
      this.users = user
    });
    console.log(this.users);

    this.router.navigateByUrl('/');
  }
}
