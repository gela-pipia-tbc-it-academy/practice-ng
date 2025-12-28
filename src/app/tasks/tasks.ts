import { Component, Input, input } from '@angular/core';
import { Task } from './task/task';
import { IUser } from '../../DUMMY_DATA';

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
}
