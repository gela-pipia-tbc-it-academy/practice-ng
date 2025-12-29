import { Injectable } from "@angular/core";
import { ITask } from "./tasks.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    tasks: ITask[] = [
      {
        id: 1,
        userId: 1,
        summary: 'Complete the project report',
        dueDate: '2024-06-10',
        title: 'Project Report',
      },
      {
        id: 2,
        userId: 1,
        summary: 'Attend the team meeting at 10 AM',
        dueDate: '2024-06-11',
        title: 'Team Meeting',
      },
      {
        id: 3,
        userId: 1,
        summary: 'Review code submissions',
        dueDate: '2024-06-12',
        title: 'Code Review',
      },
      {
        id: 4,
        userId: 2,
        summary: 'Update the client on project status',
        dueDate: '2024-06-10',
        title: 'Project Update',
      },
      {
        id: 5,
        userId: 2,
        summary: 'Fix bugs in the authentication module',
        dueDate: '2024-06-11',
        title: 'Bug Fixes',
      },
      {
        id: 6,
        userId: 2,
        summary: 'Prepare presentation for Friday',
        dueDate: '2024-06-12',
        title: 'Presentation',
      },
      {
        id: 7,
        userId: 3,
        summary: 'Design new UI mockups',
        dueDate: '2024-06-10',
        title: 'UI Mockups',
      },
      {
        id: 8,
        userId: 3,
        summary: 'Optimize database queries',
        dueDate: '2024-06-11',
        title: 'Database Optimization',
      },
      {
        id: 9,
        userId: 3,
        summary: 'Write unit tests for the new features',
        dueDate: '2024-06-12',
        title: 'Unit Testing',
      },
      {
        id: 10,
        userId: 4,
        summary: 'Conduct user interviews',
        dueDate: '2024-06-10',
        title: 'User Interviews',
      },
      {
        id: 11,
        userId: 4,
        summary: 'Analyze feedback data',
        dueDate: '2024-06-11',
        title: 'Feedback Analysis',
      },
      {
        id: 12,
        userId: 4,
        summary: 'Plan the next sprint tasks',
        dueDate: '2024-06-12',
        title: 'Sprint Planning',
      },
    ];

    removeTask(id: number): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }

    addTask(task: Omit<ITask, 'id'>): void {
      this.tasks.unshift({...task, id: this.tasks.length + 1} as ITask)
    }
}