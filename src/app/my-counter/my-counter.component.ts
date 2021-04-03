import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { allActions } from './../store/Counter/counter-actions';
import { useCount } from './../store/index';

const { increment, decrement, reset, whoIsName } = allActions;

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
  count$: Observable<number>


  constructor(private store: Store<AppState>) {
    this.count$ = store.select(useCount);
  }

  increment(): void {
    this.store.dispatch(increment());
  }
  decrement(): void {
    this.store.dispatch(decrement());
  }
  reset(): void {
    this.store.dispatch(reset());
  }
  name(): void {
    this.store.dispatch(whoIsName({ name: 'Felipe' }));
  }
}
