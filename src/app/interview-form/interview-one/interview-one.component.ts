import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementBase } from '../element-base';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-interview-one',
  templateUrl: './interview-one.component.html',
  styleUrls: ['./interview-one.component.css']
})
export class InterviewOneComponent {
  elements$: Observable<ElementBase<any>[]>;

  constructor(service: ElementService) {
    this.elements$ = service.constructDynamicElements("interview-one");
  }
}
