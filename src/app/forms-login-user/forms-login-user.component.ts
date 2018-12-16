import { Component, OnInit  } from '@angular/core';
import {UserService} from '../user.service';
import { UserModule } from '../user/user.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forms-login-user',
  templateUrl: './forms-login-user.component.html',
  styleUrls: ['./forms-login-user.component.css']
})
export class FormsLoginUserComponent implements OnInit  {

  constructor(private userService:UserService ,private router:Router) {

  }
  userdetailes : UserModule = new UserModule();
  ngOnInit() {

  }

    loginUser(){
     this.userService.postUser(this.userdetailes).subscribe(data=>{
       if(data['code'] == 404){
          this.router.navigate(['/welcomeRegister'])
       }
       else if(data['code'] == 200){
           localStorage.setItem('dataSource', 'true');
        //   location.reload();
           if(data['type'] == 'user') {
               this.router.navigate(['/welcomeForms']);

           }
           else if(data['type']=='admin'){
               this.router.navigate(['/welcomeApproval'])

           }
           else if(data['type']=='study'){
               this.router.navigate(['/studyCase'])

           }

       }
     });
    }



}
