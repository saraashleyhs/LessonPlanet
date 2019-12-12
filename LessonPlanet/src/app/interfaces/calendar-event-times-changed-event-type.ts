import { CalendarEvent } from 'calendar-utils';

export interface CalendarEventTimesChangedEventType<MetaType = any> {
  type: CalendarEventTimesChangedEventType;
  event: CalendarEvent<MetaType>;
  newStart: Date;
  newEnd?: Date;
  allDay?: boolean;
}
