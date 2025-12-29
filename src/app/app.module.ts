import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser";

import { App } from "./app";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { Task } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { UserService } from "./user/user.service";
import { TasksService } from "./tasks/tasks.service";

@NgModule({
    declarations: [App],
    imports: [FormsModule, BrowserModule, User, Tasks, Task, NewTask],
    providers: [UserService, TasksService],
    bootstrap: [App],
})
export class AppModule {


}