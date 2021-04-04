import { ActionCreator, createReducer, on } from '@ngrx/store';
import { allActions } from './counter-actions';

export const INITIAL_STATE = 0;


const _counterReducer = createReducer(INITIAL_STATE,
  on(allActions.increment, state => ++state),
  on(allActions.decrement, state => --state),
  on(allActions.reset, () => 0),
);

export function counterReducer(state: number, action: ActionCreator): number {
  return _counterReducer(state, action);
}
