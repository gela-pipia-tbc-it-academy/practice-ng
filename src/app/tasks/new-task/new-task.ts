import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: number;
  tasksService = inject(TasksService);

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      userId: this.userId
    })
    this.onClose()
  }
}
