import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { GeolocationService } from './../geolocation.service';
import { allActions } from './../store/Counter/counter-actions';
import { allActionsGeo } from './../store/Geolocation/geo-actions';
import { GeoStoreProps } from './../store/Geolocation/geo-model';
import { useCount, useGeo } from './../store/selectors';
import { GeolocationProps } from './my-counter-model';

const { increment, decrement, reset, whoIsName } = allActions;



@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>
  geolocation$: Observable<GeoStoreProps<number>>


  constructor(private store: Store<AppState>, private geo: GeolocationService) {
    this.count$ = store.select(useCount);
    this.geolocation$ = store.select(useGeo)
  }
  ngOnInit() {
    this.geo.getGeolocation().then(({ latitude, longitude }: GeolocationProps) => {
      this.store.dispatch(allActionsGeo.GetLat({ latitude }))
      this.store.dispatch(allActionsGeo.GetLong({ longitude }))
    })
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
