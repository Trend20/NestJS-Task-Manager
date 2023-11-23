import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './types/task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
// import { ForbiddenException } from 'src/errors/forbidden.exception';

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
  async getAllTasks(
    @Query() taskFilterDto: GetTasksFilterDto,
  ): Promise<Task[]> {
    // if we have any filters defined, apply filters
    // return all the tasks
    try {
      if (Object.keys(taskFilterDto).length) {
        return this.taskService.getTaskWithFilters(taskFilterDto);
      } else {
        return this.taskService.getAllTasks();
      }
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No tasks available',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: err,
        },
      );
    }
  }

  // get task by ID
  @Get('/:id')
  getTask(@Param('id') id: string): Task {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
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
  // throw new ForbiddenException();
  deleteTask(@Param('id') id: string): void {
    return this.taskService.deleteTask(id);
  }
}
