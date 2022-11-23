import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementBase } from '../element-base';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-interview-two',
  templateUrl: './interview-two.component.html',
  styleUrls: ['./interview-two.component.css']
})
export class InterviewTwoComponent {
  elements$: Observable<ElementBase<any>[]>;

  constructor(service: ElementService) {
    this.elements$ = service.getElements("interview-two");
  }
}
