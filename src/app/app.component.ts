import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    Component,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnChanges ,OnDestroy ,DoCheck
,AfterContentInit ,AfterContentChecked,AfterViewInit{
  title = 'untitled2';
  login;



    ngDoCheck() {
        this.login= localStorage.getItem('dataSource');
        console.log("ngDoCheck")
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
        this.login= localStorage.getItem('dataSource');
    }

    ngAfterContentChecked() {
        this.login= localStorage.getItem('dataSource');
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
        this.login= localStorage.getItem('dataSource');
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
        this.login= localStorage.getItem('dataSource');
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
        this.login= localStorage.getItem('dataSource');
    }












constructor(private userservices:UserService,private router:Router){
  console.log("constroutor");
    this.login= localStorage.getItem('dataSource');
    console.log(this.login)
    this.get();
}
ngOnChanges(changes: SimpleChanges): void {
    this.login= localStorage.getItem('dataSource');
    console.log("ngChange");
}

get(){
    this.login= localStorage.getItem('dataSource');
}
    login_(){
    this.login= localStorage.getItem('dataSource');
    }
    ngOnInit(){
        console.log("nginit");
        this.login= localStorage.getItem('dataSource');
        this.get();
    }
  logout(){
      this.login= localStorage.getItem('dataSource');
    this.userservices.logout().subscribe(data=>data);
      console.log(this.login)
      this.get();
      this.router.navigate(['/welcomePage']);
      this.get();

  }
}
