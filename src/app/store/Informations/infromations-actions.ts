import { createAction, props } from '@ngrx/store'

const getYearNow = createAction('[Informations Component] Get year now')
const getMonthNow = createAction('[Informations Component] Get or update month now')
const getDayNow = createAction('[Informations Component] Get or update day now', props<{ day: number }>())


export const allActionsInfo = {
  getYearNow,
  getMonthNow,
  getDayNow
}
