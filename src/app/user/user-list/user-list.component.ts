// src/app/user/user-list/user-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  selectedUser: string='';

  onUserSelected(user: string) {
    this.selectedUser = user;
  }
}
