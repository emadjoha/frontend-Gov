import { Component, OnInit } from '@angular/core';
import {ElectronicUserService} from '../electronic-user.service';
import {ElectronicUserModule} from '../electronic-user/electronic-user.module';

@Component({
  selector: 'app-forms-ele',
  templateUrl: './forms-ele.component.html',
  styleUrls: ['./forms-ele.component.css']
})
export class FormsEleComponent implements OnInit {
    ngOnInit() {
    }
    eletronicModel:ElectronicUserModule = new ElectronicUserModule();
  constructor(private electronicUserService:ElectronicUserService) { }



  addAnewForms(){
    this.electronicUserService.addAnewForms(this.eletronicModel).subscribe(data=>data);
  }

}
