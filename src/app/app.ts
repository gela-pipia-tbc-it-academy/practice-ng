import { Component, computed, signal } from '@angular/core';
import { User } from "./user/user";
import { users as DUMMY_USERS } from '../DUMMY_DATA';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId!: number;
  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId)!;
  }

  onSelectUser(id: number) {
    this.selectedUserId = id;
  }
}
