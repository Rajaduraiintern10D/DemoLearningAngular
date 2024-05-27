import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 //pipes Example
  today : Date = new Date();
  
  //asnyc pipes Example
  appStatus =new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('users data Recevied')
  }, 3000);
})
}
