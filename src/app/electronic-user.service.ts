import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ElectronicUserModule} from './electronic-user/electronic-user.module';

@Injectable()
export class ElectronicUserService {

  constructor(private http:HttpClient) { }

  readALLElect():Observable<ElectronicUserModule[]>{
    return this.http.get<ElectronicUserModule[]>('/all');
  }

  editStatusApproval(approval:ElectronicUserModule):Observable<ElectronicUserModule>{
    return this.http.put<ElectronicUserModule>('/editReqApp',approval)
  }
  editStatusStuding(study:ElectronicUserModule):Observable<ElectronicUserModule>{
    return this.http.put<ElectronicUserModule>('/editReqStudy',study);
  }
  findById(id:String):Observable<ElectronicUserModule>{
    return this.http.get<ElectronicUserModule>('/getById');
  }

  editStatusReject(reject:ElectronicUserModule):Observable<ElectronicUserModule>{
    return this.http.put<ElectronicUserModule>('/editReqRej',reject)
  }

  finish():Observable<ElectronicUserModule[]>{
    return this.http.get<ElectronicUserModule[]>('/finished');
  }
    approvalElect():Observable<ElectronicUserModule[]>{
    return this.http.get<ElectronicUserModule[]>('/approval');
  }
    atStudyCase():Observable<ElectronicUserModule[]>{
        return this.http.get<ElectronicUserModule[]>('/atStudy');
    }

  rejectElect():Observable<ElectronicUserModule[]>{
    return this.http.get<ElectronicUserModule[]>('/reject')
  }

  studyElect(electronicUser:ElectronicUserModule):Observable<ElectronicUserModule>{
    return this.http.put<ElectronicUserModule>('',electronicUser)
  }

  addAnewForms(electronicUser:ElectronicUserModule):Observable<ElectronicUserModule>{
    return this.http.post<ElectronicUserModule>('/addAnewForms',electronicUser);
  }






}
