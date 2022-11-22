import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './interview-form/question-base'
import { QuestionService } from './interview-form/question.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'interview-form-platform';

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
