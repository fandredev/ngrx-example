import { InformationsProps } from './Informations/informations-model';
import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'


const selectCount = (state: AppState) => state.count
const selectInfo = (state: AppState) => state.info

export const useCount = createSelector(
  selectCount,
  (state: number) => state
)

export const useInfo = createSelector(
  selectInfo,
  (state: InformationsProps) => state
)
