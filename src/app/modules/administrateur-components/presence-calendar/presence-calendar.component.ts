import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-presence-calendar',
  templateUrl: './presence-calendar.component.html',
  styleUrls: ['./presence-calendar.component.scss']
})
export class PresenceCalendarComponent implements OnInit {

    //add some events
    presentDays: number = 0;
    absentDays: number = 0;
    events: any = [
      { title : 'present', date: '2022-04-01', color: '#0000FF'},
      { title : 'absent' , date: '2022-04-02' , color: '#0000FF'},
      { title : 'present' , date: '2022-04-03' , color: '#FF0000'},
    ];
  

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.events

  };  


  constructor() { }

  ngOnInit(): void {
    this.events.forEach((e: { [x: string]: string; }) => {
      if (e["title"] == 'present'){
        this.presentDays++;

      }else {
        this.absentDays++
      }
    });
  console.log("Present " + this.presentDays);
  console.log(" Absent " +this.absentDays);
  }

}
