import { createAction, props } from '@ngrx/store';

const increment = createAction('[Counter Component] Increment');
const decrement = createAction('[Counter Component] Decrement');
const reset = createAction('[Counter Component] Reset');
const whoIsName = createAction('[Counter Component] Name', props<{ name: string }>());

export const allActions = Object.freeze({
  increment,
  decrement,
  reset,
  whoIsName
});
