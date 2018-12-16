import { Component, OnInit } from '@angular/core';
import {ElectronicUserService} from '../electronic-user.service';
import {ElectronicUserModule} from '../electronic-user/electronic-user.module';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-approval-manager',
  templateUrl: './approval-manager.component.html',
  styleUrls: ['./approval-manager.component.css']
})
export class ApprovalManagerComponent implements OnInit {
  itemsEditModel:ElectronicUserModule = new ElectronicUserModule();
  items:ElectronicUserModule[];
  approvalItems:ElectronicUserModule[];
  rejectItems:ElectronicUserModule[];
  notApprovalAReject:ElectronicUserModule[];
  constructor(private eleUser:ElectronicUserService) { }

  ngOnInit() {
    console.log("all data");
    this.getall();
    console.log("Approval");
    this.approval();
    console.log("Reject");
    this.reject();
  }
  login:number;
    active: number=0;
    indexOfcurrent:any;
    affect:boolean=false;
    onClick(index: number) {
      this.affect=true;
        this.active = index;
        this.indexOfcurrent = index;
        this.login=this.indexOfcurrent['id'];
    }

  getall(){
    this.eleUser.readALLElect().subscribe(data=>{
      this.items = data;
    })
  }

  approval(){
      this.eleUser.approvalElect().subscribe(data=>{
        this.approvalItems = data;
      })
  }
  reject(){
      this.eleUser.rejectElect().subscribe(data=>{
        this.rejectItems = data;
      })
  }
  editApproval(){
      this.itemsEditModel.id = this.login;
      //  console.log(this.login);
     this.eleUser.editStatusApproval(this.itemsEditModel).subscribe(data=>data);
      this.approval();
     this.reject();
     this.approval();
     this.reject();
  }
  editReject(){
      this.itemsEditModel.id = this.login;
      this.eleUser.editStatusReject(this.itemsEditModel).subscribe(data=>data);
      this.approval();
      this.reject();
      this.approval();
      this.reject();
  }



}
