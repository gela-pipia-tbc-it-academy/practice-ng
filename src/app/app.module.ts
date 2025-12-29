import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { User } from './user/user';
import { UserService } from './user/user.service';
import { TasksService } from './tasks/tasks.service';
import { Header } from './ui/header/header';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [App, Header, User],
  imports: [BrowserModule, SharedModule, TasksModule],
  providers: [UserService, TasksService],
  bootstrap: [App],
})
export class AppModule {}
