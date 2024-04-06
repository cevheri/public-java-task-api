import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 18148,
  login: '8',
};

export const sampleWithPartialData: IUser = {
  id: 8776,
  login: '`7=@Gqk\\snIe\\szT3',
};

export const sampleWithFullData: IUser = {
  id: 4940,
  login: 'Eg4',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
