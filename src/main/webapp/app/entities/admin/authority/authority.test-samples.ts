import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e2ae6368-0cee-4f69-ba2b-db5f4f23f4aa',
};

export const sampleWithPartialData: IAuthority = {
  name: '7591bc17-a212-49c8-bfd3-23438623c149',
};

export const sampleWithFullData: IAuthority = {
  name: '1759cc57-5b11-4453-9495-d117b340fa0a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
