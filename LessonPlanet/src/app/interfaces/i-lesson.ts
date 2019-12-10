import{ ITask } from './i-task';

export interface ILesson {
  Id: number;
  Name: string;
  Description: string;
  UserId: string;
  Tasks: ITask[];
}
