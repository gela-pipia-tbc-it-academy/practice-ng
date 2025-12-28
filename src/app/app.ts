import { Component, computed, signal } from '@angular/core';
import { User } from "./user/user";
import { users as DUMMY_USERS } from '../DUMMY_DATA';
import { Tasks } from './app-tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // users = signal(DUMMY_USERS);
  // selectedUserId = signal<number | null>(null);
  // selectedUserName = computed(() => this.users().find(u => u.id === this.selectedUserId())?.name);

  users = DUMMY_USERS;
  selectedUserId!: number;
  get selectedUserName() {
    const user = this.users.find(u => u.id === this.selectedUserId);
    return user ? user.name : undefined;
  }

  onSelectUser(id: number) {
    this.selectedUserId = id;
  }
}
