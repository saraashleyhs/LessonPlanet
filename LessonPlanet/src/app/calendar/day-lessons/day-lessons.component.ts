import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';

@Component({
  selector: 'app-day-lessons',
  templateUrl: './day-lessons.component.html',
  styleUrls: ['./day-lessons.component.css']
})
export class DayLessonsComponent implements OnInit {
  @Input() viewDate: Date;
  @Input() events: CalendarEvent[];
  constructor() { }

  ngOnInit() {
  }

}
