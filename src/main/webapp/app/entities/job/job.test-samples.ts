import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 16170,
};

export const sampleWithPartialData: IJob = {
  id: 18251,
  jobTitle: 'Principal Factors Associate',
};

export const sampleWithFullData: IJob = {
  id: 13226,
  jobTitle: 'Human Data Architect',
  minSalary: 24845,
  maxSalary: 24516,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
