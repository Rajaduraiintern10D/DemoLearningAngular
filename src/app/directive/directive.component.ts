import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  isVisible=true;
    items = ['Item 1', 'Item 2', 'Item 3'];

    isActive = true;
    isDisabled = false;

    color = 'blue';
  fontSize = '20px';

  name :string ='';
}
