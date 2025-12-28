import { Component, Input } from '@angular/core';
import { ITask } from '../../../DUMMY_DATA';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: ITask;
}
