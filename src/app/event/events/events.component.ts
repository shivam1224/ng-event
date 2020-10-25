import { Component, OnInit } from '@angular/core';
import { EventService } from './../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: any;
  email: string;
  env: string;
  constructor(private eventSvr: EventService) {}

  ngOnInit(): void {
    this.email = '';
    this.env = '';
    this.eventSvr.fetchEvents().subscribe((res) => {
      this.events = res.data;
    });
  }
  filterEmail() {
    this.env = '';
    if (this.email !== '') {
      this.eventSvr.filterByEmail(this.email).subscribe((res) => {
        this.events = res.data;
      });
    } else {
      this.eventSvr.fetchEvents().subscribe((res) => {
        this.events = res.data;
      });
    }
  }
  filterEnv() {
    this.email = '';
    if (this.env !== '') {
      this.eventSvr.filterByEnv(this.env).subscribe((res) => {
        this.events = res.data;
      });
    } else {
      this.eventSvr.fetchEvents().subscribe((res) => {
        this.events = res.data;
      });
    }
  }
}
