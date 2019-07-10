import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealTrackerComponent } from './meal-tracker/meal-tracker.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MealTrackerComponent,
    MealDetailsComponent,
    MealFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
