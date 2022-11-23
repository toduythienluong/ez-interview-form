import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementBase } from '../element-base';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-interview-three',
  templateUrl: './interview-three.component.html',
  styleUrls: ['./interview-three.component.css']
})
export class InterviewThreeComponent {
  elements$: Observable<ElementBase<any>[]>;

  constructor(service: ElementService) {
    this.elements$ = service.getElements("interview-three");
  }
}
