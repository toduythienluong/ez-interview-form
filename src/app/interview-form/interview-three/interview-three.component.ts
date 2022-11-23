import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-interview-three',
  templateUrl: './interview-three.component.html',
  styleUrls: ['./interview-three.component.css']
})
export class InterviewThreeComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions("interview-three");
  }
}
