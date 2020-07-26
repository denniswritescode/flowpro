import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  SeriesRepeatType,
  TransactionType
} from '../../../../../shared/shared.enums';

@Component({
  selector: 'flo-create-transaction-series',
  templateUrl: './create-transaction-series.component.html',
  styleUrls: ['./create-transaction-series.component.scss']
})
export class CreateTransactionSeriesComponent implements OnInit {

  @Input() public type: TransactionType;

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  isIncome() {
    return this.type === TransactionType.INCOME ? true : false;
  }

}
