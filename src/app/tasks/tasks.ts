import { Component, inject, Input } from '@angular/core';
import { Task } from './task/task';
import { TasksService } from './tasks.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  private tasksService = inject(TasksService);
  @Input({ required: true }) user!: IUser;

  get tasks() {
    return this.tasksService.tasks.filter(task => task.userId === this.user.id);
  }

}
