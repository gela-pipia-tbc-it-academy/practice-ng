import { Component, Input, input } from '@angular/core';
import { Task } from './task/task';
import { IUser } from '../../DUMMY_DATA';
import { users as DUMMY_USERS } from '../../DUMMY_DATA';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({ required: true }) user!: IUser;

  get tasks() {
    return this.user.tasks;
  }

  onCompleteTask(id: number) {
    console.log('Task with id ' + id + ' completed by ' + this.user.name);
    for(let user of DUMMY_USERS) {
      if(user.id === this.user.id) {
        user.tasks = user.tasks.filter(task => task.id !== id);
        break;
      }
    }
  }
}
