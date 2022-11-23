import { Injectable } from '@angular/core';

import { DropdownElement } from './dropdown-element';
import { ElementBase } from './element-base';
import { TextboxElement } from './textbox-element';
import { of } from 'rxjs';

@Injectable()
export class FilerRecordService {
  public getFilerRecordByCustomerId(customerId: string): any {
    return {
      "DataRecordId": "2022112019",
      "RecordName": "filer-record",
      "State": "federal",
      "Sections": [
        {
          "SectionName": "personalinformation",
          "DataFields": [
            {
              "FieldName": "firstName",
              "FieldValue": "Adam",
              "FieldType": "input",
              "DataType": "string"
            },
            {
              "FieldName": "lastName",
              "FieldValue": "Smith",
              "FieldType": "input",
              "DataType": "string"
            },
            {
              "FieldName": "fullName",
              "FieldValue": "",
              "FieldType": "calculated",
              "DataType": "string",
              "CalculationExpression": "'{{federal.personalinformation.firstName}}' + ' ' + '{{federal.personalinformation.lastName}}'",
              "ExpressionToExecute": ""
            }
          ]
        },
        {
          "SectionName": "income",
          "DataFields": [
            {
              "FieldName": "net",
              "FieldValue": "1100",
              "FieldType": "double",
              "DataType": "int"
            },
            {
              "FieldName": "tax",
              "FieldValue": "",
              "FieldType": "calculated",
              "DataType": "double",
              "CalculationExpression": "{{federal.income.net}} * 0.1",
              "ExpressionToExecute": ""
            }
          ]
        }
      ]
    };
  }
}