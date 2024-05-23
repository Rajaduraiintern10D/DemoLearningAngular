import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoLearning';
  firstName: string = "Yallaling";
  lastName:string = "Goudar";
  myFunction(): void { 
    alert('Show alert!'); 
  }
}
