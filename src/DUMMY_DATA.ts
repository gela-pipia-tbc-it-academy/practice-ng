export interface IUser {
  id: number;
  name: string;
  avatar: string;
  tasks: ITask[];
}

export interface ITask {
  id: number;
  summary: string;
  dueDate: string;
  title: string;
}


export const users: IUser[] = [
  {
    id: 1,
    name: 'Alice',
    avatar: 'https://ui-avatars.com/api/?name=Alice&background=random&size=128',
    tasks: [
      { id: 1, summary: 'Complete the project report', dueDate: '2024-06-10', title: 'Project Report' },
      { id: 2, summary: 'Attend the team meeting at 10 AM', dueDate: '2024-06-11', title: 'Team Meeting' },
      { id: 3, summary: 'Review code submissions', dueDate: '2024-06-12', title: 'Code Review' },
    ]
  },
  {
    id: 2,
    name: 'Bob',
    avatar: 'https://ui-avatars.com/api/?name=Bob&background=random&size=128',
    tasks: [
      { id: 1, summary: 'Update the client on project status', dueDate: '2024-06-10', title: 'Project Update' },
      { id: 2, summary: 'Fix bugs in the authentication module', dueDate: '2024-06-11', title: 'Bug Fixes' },
      { id: 3, summary: 'Prepare presentation for Friday', dueDate: '2024-06-12', title: 'Presentation' },
    ]
  },
  {
    id: 3,
    name: 'Charlie',
    avatar: 'https://ui-avatars.com/api/?name=Charlie&background=random&size=128',
    tasks: [
      { id: 1, summary: 'Design new UI mockups', dueDate: '2024-06-10', title: 'UI Mockups' },
      { id: 2, summary: 'Optimize database queries', dueDate: '2024-06-11', title: 'Database Optimization' },
      { id: 3, summary: 'Write unit tests for the new features', dueDate: '2024-06-12', title: 'Unit Testing' },
    ]
  },
  {
    id: 4,
    name: 'Diana',
    avatar: 'https://ui-avatars.com/api/?name=Diana&background=random&size=128',
    tasks: [
      { id: 1, summary: 'Conduct user interviews', dueDate: '2024-06-10', title: 'User Interviews' },
      { id: 2, summary: 'Analyze feedback data', dueDate: '2024-06-11', title: 'Feedback Analysis' },
      { id: 3, summary: 'Plan the next sprint tasks', dueDate: '2024-06-12', title: 'Sprint Planning' },
    ]
  }
];
