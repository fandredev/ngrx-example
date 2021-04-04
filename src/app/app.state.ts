import { GeoStoreProps } from './store/Geolocation/geo-model';
import { InformationsProps } from './store/Informations/informations-model';
export interface AppState {
  count: number,
  info: InformationsProps,
  geo: GeoStoreProps<number>
}
