import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-interview-two',
  templateUrl: './interview-two.component.html',
  styleUrls: ['./interview-two.component.css']
})
export class InterviewTwoComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions("interview-two");
  }
}
