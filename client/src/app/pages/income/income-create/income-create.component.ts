import { Component, OnInit } from '@angular/core';

import { TransactionType } from '../../../../../../shared/shared.enums';

@Component({
  selector: 'flo-income-create',
  templateUrl: './income-create.component.html',
  styleUrls: ['./income-create.component.scss']
})
export class IncomeCreateComponent implements OnInit {

  public transType: TransactionType = TransactionType.INCOME;

  constructor() { }

  ngOnInit(): void {
  }

}
