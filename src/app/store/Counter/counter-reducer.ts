import { ActionCreator, createReducer, on } from '@ngrx/store'
import { allActions } from './counter-actions'

export const INITIAL_STATE: number = 0


const _counterReducer = createReducer(INITIAL_STATE,
  on(allActions.increment, state => state + 1),
  on(allActions.decrement, state => state - 1),
  on(allActions.reset, state => state = 0),
)

export function counterReducer(state: number , action: ActionCreator) {
  return _counterReducer(state, action)
}
