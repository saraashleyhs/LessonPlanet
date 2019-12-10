import { ILesson } from './i-lesson';

export interface ITask {
  Id: number;
  Title: string;
  Content: string;
  DatePublished: Date;
  LessonId;
  Lesson: ILesson;
}
