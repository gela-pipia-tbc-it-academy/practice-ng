import { Component, inject, Input } from '@angular/core';
import { ITask } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: ITask;
  tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
