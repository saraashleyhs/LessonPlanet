import { ILesson } from './i-lesson';

export interface IUser {
  FirstName: string;
  LastName: string;
  FullName: string;
  Lessons: ILesson[];
}
