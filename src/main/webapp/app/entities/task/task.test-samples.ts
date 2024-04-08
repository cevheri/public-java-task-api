import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 25993,
};

export const sampleWithPartialData: ITask = {
  id: 266,
  title: 'because',
};

export const sampleWithFullData: ITask = {
  id: 28556,
  title: 'of',
  description: 'throughout',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
