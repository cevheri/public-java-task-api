import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 32648,
};

export const sampleWithPartialData: IEmployee = {
  id: 14802,
  firstName: 'Orlando',
  email: 'Norbert22@yahoo.com',
  phoneNumber: 'evergreen readily',
  hireDate: dayjs('2024-04-08T19:55'),
  commissionPct: 11302,
};

export const sampleWithFullData: IEmployee = {
  id: 26499,
  firstName: 'Eulah',
  lastName: 'Braun',
  email: 'Jeanie_Rempel46@hotmail.com',
  phoneNumber: 'up next',
  hireDate: dayjs('2024-04-08T03:54'),
  salary: 27852,
  commissionPct: 20528,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
