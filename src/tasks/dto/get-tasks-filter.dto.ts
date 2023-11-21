import { TaskStatus } from '../types/task.model';

export class GetTasksFilterDto {
  status?: TaskStatus;
  search?: string;
}
