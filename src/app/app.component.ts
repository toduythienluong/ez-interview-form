import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementBase } from './interview-form/element-base'
import { ElementService } from './interview-form/element.service'
import { FormDefinitionService } from './interview-form/form-definition.service'
import { FilerRecordService } from './interview-form/filer-record.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ElementService, FormDefinitionService, FilerRecordService]
})
export class AppComponent {
  title = 'interview-form-platform';
}
