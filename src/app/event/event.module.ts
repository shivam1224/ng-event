import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule
  ]
})
export class EventModule { }
