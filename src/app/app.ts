import { Component, inject } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  userService = inject(UserService);

  users = this.userService.users
  selectedUserId!: number;
  
  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId)!;
  }

  onSelectUser(id: number) {
    this.selectedUserId = id;
  }
}
