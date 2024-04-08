import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 29779,
  departmentName: 'forecast pike finally',
};

export const sampleWithPartialData: IDepartment = {
  id: 13241,
  departmentName: 'fooey positively till',
};

export const sampleWithFullData: IDepartment = {
  id: 30571,
  departmentName: 'lest',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'earnest ah',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
