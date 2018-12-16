import {Component, OnInit} from '@angular/core';
import {ElectronicUserModule} from '../electronic-user/electronic-user.module';
import {ElectronicUserService} from '../electronic-user.service';

@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.css']
})
export class PaidComponent implements OnInit {
finished:ElectronicUserModule[];
  constructor(private electronicUserService:ElectronicUserService) { }

  ngOnInit() {
  this.finished_();
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
  finished_(){
    this.electronicUserService.finish().subscribe(data=>{
      this.finished = data;
    })
  }

}
