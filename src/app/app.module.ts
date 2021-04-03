import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './store/Counter/counter-reducer'
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { InformationsComponent } from './informations/informations.component'
@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    InformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
