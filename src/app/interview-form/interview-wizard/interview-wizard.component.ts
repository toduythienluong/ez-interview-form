import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'interview-wizard',
  templateUrl: './interview-wizard.component.html',
  styleUrls: ['./interview-wizard.component.css']
})
export class InterviewWizardComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions('');
  }
}
