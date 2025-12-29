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
import { Header } from "./shared/header/header";

@NgModule({
    declarations: [App, Header, User, Tasks, Task, NewTask],
    imports: [FormsModule, BrowserModule],
    providers: [UserService, TasksService],
    bootstrap: [App],
})
export class AppModule {


}