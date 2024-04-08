import { IRegion } from 'app/entities/region/region.model';

export interface ICountry {
  id: number;
  countryName?: string | null;
  region?: IRegion | null;
}

export type NewCountry = Omit<ICountry, 'id'> & { id: null };
