import { ILesson } from './i-lesson';

export interface IUser {
  id: number;
  email: string;
  password: string;
  token?: string;
  FirstName: string;
  LastName: string;
  FullName: string;
  Lessons: ILesson[];
}
