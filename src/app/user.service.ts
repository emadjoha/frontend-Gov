import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserModule } from './user/user.module';
import {Observable} from 'rxjs';


@Injectable()
export class UserService {
    static  login = false;

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<UserModule[]>{
      return this.http.get<UserModule[]>('/allusers');
  }

   postUser(usermodel:UserModule):Observable<UserModule>{
       return  this.http.post<UserModule>('/login',usermodel);
   }
    insertUser(usermodel :UserModule):Observable<UserModule>{
      return this.http.post<UserModule>('/register',usermodel);
    }
    logout():Observable<UserModule>{
        localStorage.setItem('dataSource', 'false');
        console.log(localStorage.getItem('dataSource'));
      return this.http.get<UserModule>('/logout');
    }

    editRoles(userModel:UserModule):Observable<UserModule>{
      return this.http.post<UserModule>('/editRoles',userModel);
    }

}
