import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  createTask(@Body() body): Task {
    console.log('Body', body);
    const { title, description } = body;
    return this.taskService.createTask(title, description);
  }

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTask() {
    console.log('This is the task');
  }

  // update task by ID
  @Put('/:id')
  updateTak() {
    console.log('This is the updated task');
  }

  // delete task by ID
  @Delete('/:id')
  deleteTask() {
    console.log('This is the deleted task');
  }
}
