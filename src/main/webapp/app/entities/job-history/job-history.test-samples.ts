import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 17988,
};

export const sampleWithPartialData: IJobHistory = {
  id: 12860,
  endDate: dayjs('2024-04-08T16:23'),
};

export const sampleWithFullData: IJobHistory = {
  id: 8587,
  startDate: dayjs('2024-04-08T14:31'),
  endDate: dayjs('2024-04-08T09:05'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
