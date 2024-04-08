import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 17464,
};

export const sampleWithPartialData: ICountry = {
  id: 22975,
};

export const sampleWithFullData: ICountry = {
  id: 24317,
  countryName: 'bait',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
