import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CalendarComponent } from './calendar/calendar.component';
import { DayLessonsComponent } from './calendar/day-lessons/day-lessons.component';
import { LessonsComponent } from './lessons/lessons.component';
import { TasksComponent } from './lessons/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './services/authservice.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LessonService } from './services/lesson.service';
import { TaskService } from './services/task.service';
import { LessonComponent } from './lessons/lesson/lesson.component';
import { TaskComponent } from './lessons/tasks/task/task.component';
import {  CalendarHeaderComponent } from './calendar/calendar.component.header';
import { UserService } from './services/user.service';
import { UrlService } from './services/url.service';
import { InterceptorService } from './services/interceptor.service';
import { HomeComponent } from './home/home.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayLessonsComponent,
    LessonsComponent,
    TasksComponent,
    LoginComponent,
    LessonComponent,
    TaskComponent,
    CalendarHeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter : function tokenGetter(){
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:5001']
      }
    })
  ],
  providers:
  // tslint:disable-next-line: max-line-length
  [AuthService, AuthGuardService, LessonService, TaskService, UserService, UrlService, InterceptorService, FormsModule, NgbModule, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
