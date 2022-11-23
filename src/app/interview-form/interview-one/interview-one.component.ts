import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-interview-one',
  templateUrl: './interview-one.component.html',
  styleUrls: ['./interview-one.component.css']
})
export class InterviewOneComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions("interview-one");
  }
}
