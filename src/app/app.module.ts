import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsLoginUserComponent } from './forms-login-user/forms-login-user.component';
import { FormsRegisterUSerComponent } from './forms-register-user/forms-register-user.component';
import {UserService} from './user.service';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { FormsEleComponent } from './forms-ele/forms-ele.component';
import { ApprovalManagerComponent } from './approval-manager/approval-manager.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudyEmplyeeComponent } from './study-emplyee/study-emplyee.component';
import {ElectronicUserService} from './electronic-user.service';
import { PaidComponent } from './paid/paid.component';
import { RolesComponent } from './roles/roles.component';
const routes: Routes =[

    {path:'welcomeApproval',component:ApprovalManagerComponent},
    {path:'welcomePage',component:WelcomePageComponent},
    {path:'studyCase',component:StudyEmplyeeComponent},
    {path: 'welcomeLogin' ,component:FormsLoginUserComponent},
    {path: 'welcomeRegister',component:FormsRegisterUSerComponent},
    {path:'welcomeForms',component:FormsEleComponent},
    {path:'paid',component:PaidComponent},
    {path:'role',component:RolesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FormsLoginUserComponent,
    FormsRegisterUSerComponent,
    FormsEleComponent,
    ApprovalManagerComponent,
    WelcomePageComponent,
    StudyEmplyeeComponent,
    PaidComponent,
    RolesComponent
  ],
  imports: [
      NgbModule,
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes)

  ],
  providers: [UserService,ElectronicUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
