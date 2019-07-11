import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealTrackerComponent } from './meal-tracker/meal-tracker.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { FormsModule } from '@angular/forms';
// import { MealComponent } from './meal/meal.component';
// import { NewMealComponent } from './new-meal/new-meal.component';
// import { MealListComponent } from './meal-list/meal-list.component';
// import { EditMealComponent } from './edit-meal/edit-meal.component';
// import { CalorieCountPipe } from './calorie-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MealTrackerComponent,
    MealDetailsComponent,
    MealFormComponent,
    // MealComponent,
    // NewMealComponent,
    // MealListComponent,
    // EditMealComponent,
    // CalorieCountPipe,
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
