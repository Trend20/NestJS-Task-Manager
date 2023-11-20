import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  // task operations

  // create task
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  // all tasks
  getAllTasks(): Task[] {
    console.log(this.tasks);
    return this.tasks;
  }

  // single task by ID
  getTask() {
    // console.log(this.tasks);
    // return this.tasks;
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
