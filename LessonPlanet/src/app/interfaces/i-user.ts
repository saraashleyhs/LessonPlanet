import { ILesson } from './i-lesson';

export interface IUser {
  id: number;
  Email: string;
  Password: string;
  token?: string;
  FirstName: string;
  LastName: string;
  FullName: string;
  Lessons: ILesson[];
}
