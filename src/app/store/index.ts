import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from '../app.state';
import { counterReducer } from './Counter/counter-reducer';
import { geoReducer } from './Geolocation/geo-reducer';
import { informationsReducer } from './Informations/informations-reducer';

export const appReducers: ActionReducerMap<AppState> = {
  count: counterReducer,
  info: informationsReducer,
  geo: geoReducer
};

function localStorageSyncReducer(reducers: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['geo'],
    rehydrate: true
  })(reducers)
}
export const metaReducers: Array<MetaReducer> = [localStorageSyncReducer]
