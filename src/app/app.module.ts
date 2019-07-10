import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealTrackerComponent } from './meal-tracker/meal-tracker.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MealTrackerComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
