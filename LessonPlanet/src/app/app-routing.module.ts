import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LessonComponent } from './lessons/lesson/lesson.component';
import { TaskService } from './services/task.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '*' , component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'calendar', component: CalendarComponent },
  {path: 'lesson', component: LessonComponent},
  {path: 'task', component: TaskService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
