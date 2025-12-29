import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { Tasks } from './tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [Tasks, Task, NewTask],
    imports: [CommonModule, DatePipe, FormsModule],
    exports: [Tasks],
})
export class TasksModule {

}