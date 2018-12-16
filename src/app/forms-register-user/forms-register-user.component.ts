import { Component, OnInit } from '@angular/core';
import {UserModule} from '../user/user.module';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forms-register-user',
  templateUrl: './forms-register-user.component.html',
  styleUrls: ['./forms-register-user.component.css']
})
export class FormsRegisterUSerComponent implements OnInit {
    userdetailes : UserModule = new UserModule();
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
        registerUser(){
        this.userService.insertUser(this.userdetailes).subscribe(data=>{
            console.log(data);
        })
    }

}
