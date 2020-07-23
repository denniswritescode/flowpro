import {
  SeriesRepeatType,
} from './shared.enums';

export interface ITransactionEvent {
  balance?: number;
  description: string;
  eventDate: Date;
  value: number;
}

export interface ITransactionLedger {
  endDate: Date;
  events: ITransactionEvent[];
  series: ITransactionSeries[];
  startDate: Date;
}

export interface ITransactionSeries {
  description: string;
  endDate?: Date;
  repeat: boolean;
  repeatType?: SeriesRepeatType;
  startDate: Date;
  value: number;
}

export interface ITransactionCalendar {
  dates: ITransactionDate[];
}

export interface ITransactionDate {
  date: Date;
  events: ITransactionEvent[];
  startBalance: number;
  endBalance: number;
}
