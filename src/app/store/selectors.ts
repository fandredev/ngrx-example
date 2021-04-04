import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';
import { GeoStoreProps } from './Geolocation/geo-model';
import { InformationsProps } from './Informations/informations-model';


const selectCount = (state: AppState) => state.count;
const selectInfo = (state: AppState) => state.info;
const selectGeo = (state: AppState) => state.geo;

export const useCount = createSelector(
  selectCount,
  (state: number) => state
);

export const useInfo = createSelector(
  selectInfo,
  (state: InformationsProps) => state
);
export const useGeo = createSelector(
  selectGeo,
  (state: GeoStoreProps<number>) => state
);
