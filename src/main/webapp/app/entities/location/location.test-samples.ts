import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 17294,
};

export const sampleWithPartialData: ILocation = {
  id: 32167,
  streetAddress: 'pish tug',
  stateProvince: 'pfft smoothly brr',
};

export const sampleWithFullData: ILocation = {
  id: 10668,
  streetAddress: 'but',
  postalCode: 'knottily successfully',
  city: 'St. Louis Park',
  stateProvince: 'needily',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
