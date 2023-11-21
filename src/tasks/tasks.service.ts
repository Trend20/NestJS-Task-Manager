import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskStatus } from './types/task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  // task operations

  // create task
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
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
    // console.log(this.tasks);
    return this.tasks;
  }

  getTaskWithFilters(taskFilterDto: GetTasksFilterDto): Task[] {
    let tasks = this.getAllTasks();
    const { status, search } = taskFilterDto;
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }
        return false;
      });
    }
    return tasks;
  }

  // single task by ID
  getTask(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    return task;
  }

  // update task by ID
  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task: Task = this.getTask(id);
    task.status = status;
    return task;
  }

  // delete task by ID
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
