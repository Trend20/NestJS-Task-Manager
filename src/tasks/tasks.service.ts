import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    {
      name: 'Write documentation',
      id: 1,
    },
    {
      name: 'Build a house',
      id: 2,
    },
    {
      name: 'Copy the maximum tables',
      id: 3,
    },
    {
      name: 'Write frontend tests',
      id: 4,
    },
  ];

  // task operations

  // all tasks
  getAllTasks() {
    console.log(this.tasks);
    return this.tasks;
  }

  // single task by ID
  getTask() {
    console.log(this.tasks);
    return this.tasks;
  }

  // update task by ID
  updateTak() {
    console.log(this.tasks);
    return this.tasks;
  }

  // delete task by ID
  deleteTask() {
    console.log(this.tasks);
    return this.tasks;
  }
}
