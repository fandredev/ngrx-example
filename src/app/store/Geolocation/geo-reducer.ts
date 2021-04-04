import { ActionCreator, createReducer, on } from '@ngrx/store';
import { allActionsGeo } from './geo-actions';
import { GeoStoreProps } from './geo-model';

const { GetLat, GetLong } = allActionsGeo

const INITIAL_STATE_GEO: GeoStoreProps<number> = {
  latitude: 0,
  longitude: 0
}

export const _geoReducer = createReducer(INITIAL_STATE_GEO,
  on(GetLat, (state, { latitude }) => ({ ...state, latitude })),
  on(GetLong, (state, { longitude }) => ({ ...state, longitude }))
)

export function geoReducer(state: GeoStoreProps<number>, action: ActionCreator) {
  return _geoReducer(state, action)
}
