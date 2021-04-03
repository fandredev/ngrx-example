import { allActions } from './../store/Counter/counter-actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { AppState } from '../app.state';

const { increment, decrement, reset, whoIsName }  = allActions

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
  count$: Observable<number>


  constructor(private store: Store<AppState>){
    this.count$ = store.select('count')
  }

  increment(){
    this.store.dispatch(increment())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
  name(){
    this.store.dispatch(whoIsName({ name: 'Felipe'}))
  }
}
