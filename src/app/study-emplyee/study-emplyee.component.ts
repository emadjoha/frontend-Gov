import {Component, OnInit} from '@angular/core';
import {ElectronicUserModule} from '../electronic-user/electronic-user.module';
import {ElectronicUserService} from '../electronic-user.service';

@Component({
  selector: 'app-study-emplyee',
  templateUrl: './study-emplyee.component.html',
  styleUrls: ['./study-emplyee.component.css']
})
export class StudyEmplyeeComponent implements OnInit {

    itemsEditModel:ElectronicUserModule = new ElectronicUserModule();
    items:ElectronicUserModule[];
    approvalItems:ElectronicUserModule[];
    studyCase:ElectronicUserModule[];
    notApprovalAReject:ElectronicUserModule[];
    constructor(private eleUser:ElectronicUserService) { }

    ngOnInit() {
        console.log("all data");
        this.getall();
        console.log("Approval");
        this.atsudy();
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
    atsudy(){
        this.eleUser.atStudyCase().subscribe(data=>{
            this.studyCase = data;
        })
    }
    editApproval(){
        this.itemsEditModel.id = this.login;
        this.eleUser.editStatusStuding(this.itemsEditModel).subscribe(data=>data);
        this.atsudy();
        this.atsudy();
        this.atsudy();
    }
    editReject(){
        this.itemsEditModel.id = this.login;
        this.eleUser.editStatusReject(this.itemsEditModel).subscribe(data=>data);
        this.approval();
        this.approval();
    }

}
