import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: any;
  user: any;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.userId = Number(routeParams.get('userId'));
    console.log(this.userId);
    this.userService.find(this.userId).subscribe((data:any)=>{
      this.user = data;
    })
  }
  update(userName: string, userEmail: string, userPassword: string){
    this.userService.update(this.userId, this.user).subscribe((res)=>{
      this.router.navigateByUrl('/');
    })
  }
}
