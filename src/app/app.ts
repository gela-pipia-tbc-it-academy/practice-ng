import { Component, computed, inject, signal } from '@angular/core';
import { User } from "./user/user";
import { Tasks } from './tasks/tasks';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  imports: [User, Tasks],
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
