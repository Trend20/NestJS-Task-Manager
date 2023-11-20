import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('/')
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get()
  getTask() {
    console.log('This is the task');
  }

  // update task by ID
  updateTak() {
    console.log('This is the updated task');
  }

  // delete task by ID
  deleteTask() {
    console.log('This is the deleted task');
  }
}
