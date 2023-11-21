import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './types/task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

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
  getAllTasks(@Query() taskFilterDto: GetTasksFilterDto): Task[] {
    // if we have any filters defined, apply filters
    // return all the tasks
    if (Object.keys(taskFilterDto).length) {
      return this.taskService.getTaskWithFilters(taskFilterDto);
    } else {
      return this.taskService.getAllTasks();
    }
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
