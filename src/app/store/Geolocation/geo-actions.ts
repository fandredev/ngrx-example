import { createAction, props } from '@ngrx/store'

export const GetLat = createAction('[Geolocation Component] Get a latitude API navigator', props<{ latitude: number }>())
export const GetLong = createAction('[Geolocation Component] Get a longitude API navigator', props<{ longitude: number }>())


export const allActionsGeo = Object.freeze({
  GetLat,
  GetLong
})
