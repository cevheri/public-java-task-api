import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 14828,
};

export const sampleWithPartialData: IRegion = {
  id: 28043,
  regionName: 'yippee sweep youthfully',
};

export const sampleWithFullData: IRegion = {
  id: 5001,
  regionName: 'cultured cheerfully',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
