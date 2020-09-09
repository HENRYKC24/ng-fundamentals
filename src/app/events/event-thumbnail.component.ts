import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
  <h2>{{event?.name}}</h2>
  <div>Date: {{event?.date}}</div>
  <div [ngClass]="myFunction()">Time: {{event?.time}} <span [ngSwitch]="event?.time">
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
  </span></div>

  <div>Price: \${{event?.price}}</div>
  <div>
    <span>Location: {{event?.location?.address}}</span>
    <span>&nbsp;</span>
    <span>{{event?.location?.city}}</span>, {{event?.location?.country}}
  </div>
</div>
  `,
  styles: [`
    .bold { font-weight: bold; }
    .green { color: #003300; }
    .thumbnail { min-height: 210px; }
    .btn-primary { padding-left: 10px; }
  `]
})
export class EventThumbnailComponent {
  @Input() event:any
  @Output() eventClick = new EventEmitter()

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }

  myFunction() {
    const testResult = this.event && this.event.time === '8:00 am';
    const myColor = {green: testResult, bold: testResult};
    return myColor;
  }
}
