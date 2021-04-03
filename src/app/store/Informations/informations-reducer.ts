import { InformationsProps } from './informations-model';
import { ActionCreator, createReducer, on } from '@ngrx/store'
import { allActionsInfo } from './infromations-actions'

const { getMonthNow, getYearNow, getDayNow }  = allActionsInfo

export const INITIAL_STATE_INFO: InformationsProps = {
  month:0,
  year: 0,
  day: 0
}

export const _informationsReducer = createReducer(INITIAL_STATE_INFO,
  on(getMonthNow, state => ({ ...state, month: new Date().getMonth() })),
  on(getYearNow, state => ({ ...state, year:  new Date().getFullYear() })),
  on(getDayNow, (state, { day }) => ({ ...state, day}))
)

export function informationsReducer(state: InformationsProps, action: Readonly<ActionCreator>) {
  return _informationsReducer(state, action)
}
