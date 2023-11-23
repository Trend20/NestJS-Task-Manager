import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  // adding TaskService to exports array because it is shared.
  // amy module that Imports the taskModule will have access to the taskservice.
  exports: [TasksService],
})
export class TasksModule {}
