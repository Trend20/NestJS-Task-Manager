import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // create a new task
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    console.log('Body', createTaskDto);
    // const { title, description } = createTaskDto;
    return this.taskService.createTask(createTaskDto);
  }

  // get all tasks
  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  // get task by ID
  @Get('/:id')
  getTask(@Param('id') id: string): Task {
    return this.taskService.getTask(id);
  }

  // update task status by ID
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.taskService.updateTaskStatus(id, status);
  }

  // delete task by ID
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.taskService.deleteTask(id);
  }
}
