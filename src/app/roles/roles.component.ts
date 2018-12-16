import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {UserModule} from '../user/user.module';
import {combineAll} from 'rxjs/operators';
import {log} from 'util';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  selectedOption:string;
  printOption:string;
  options = [
      {name:"أدمن",value:"admin"},
      {name:"مستخدم",value:"user"},
      {name:"دراسات",value:"study"}
  ];




  itemsusers:UserModule[];
  itemeditUserRoles:UserModule = new UserModule();
  constructor(private userService:UserService) { }
    login:number;
    active: number=0;
    indexOfcurrent:any;
    affect:boolean=false;
    value_ :string;
    onClick(index: number) {
        this.affect=true;
        this.active = index;
        this.indexOfcurrent = index;
        this.login=this.indexOfcurrent['id'];
    }

  ngOnInit() {
    this.getallusers();
  }
  getallusers(){
    this.userService.getAllUsers().subscribe(data=>{
      this.itemsusers = data;
    })
  }

  updateRoles(){
      this.itemeditUserRoles.id = this.login;
      if(this.selectedOption == 'أدمن'){
          this.itemeditUserRoles.type = 'admin';
      }
      else if(this.selectedOption =='مستخدم'){
          this.itemeditUserRoles.type = 'user';
      }
      else if(this.selectedOption == 'دراسات') {
          this.itemeditUserRoles.type = 'study';
      }
      this.userService.editRoles(this.itemeditUserRoles).subscribe(data=>{
        data
      })
      this.getallusers();
      this.getallusers();
    }



}
