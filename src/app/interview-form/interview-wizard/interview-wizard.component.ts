import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementBase } from '../element-base';
import { ElementService } from '../element.service';

@Component({
  selector: 'interview-wizard',
  templateUrl: './interview-wizard.component.html',
  styleUrls: ['./interview-wizard.component.css']
})
export class InterviewWizardComponent {
  questions$: Observable<ElementBase<any>[]>;

  constructor(service: ElementService) {
    this.questions$ = service.getElements('');
  }
}
