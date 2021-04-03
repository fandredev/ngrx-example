import { TypeButtons } from './../app.model';
import { useInfo } from './../store/index';
import { InformationsProps } from './../store/Informations/informations-model';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';

import { allActionsInfo } from '../store/Informations/infromations-actions'


const { getYearNow, getMonthNow, getDayNow } = allActionsInfo
@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent  {
  informations$: Observable<InformationsProps>
  buttons: TypeButtons

  constructor(private store: Store<AppState>){
    this.informations$ = store.pipe(select(useInfo))
  }

  getYearNow(){
    this.store.dispatch(getYearNow())
  }
  getMonthNow(){
    this.store.dispatch(getMonthNow())
  }
  getDayNow(){
    this.store.dispatch(getDayNow({ day: new Date().getDay() }))
  }
}
