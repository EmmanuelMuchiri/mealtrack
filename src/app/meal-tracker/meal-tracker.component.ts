import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mealss } from '../mealss';
// import { Meals } from '../meals';

@Component({
  selector: 'app-meal-tracker',
  templateUrl: './meal-tracker.component.html',
  styleUrls: ['./meal-tracker.component.css']
})
export class MealTrackerComponent implements OnInit {
  @Input() meal: Meals;
  @Output() isCompleted = new EventEmitter<boolean>();

  meals = Mealss;
  addNewMeal(meal) {
    let mealLength = this.meals.length;
    meal.id = mealLength + 1;
    this.meals.push(meal)
  }
  mealDelete(complete: boolean) {
    this.isCompleted.emit(complete);
  }
  deleteMeal(isCompleted, index) {
    if (isCompleted) {
      this.meals.splice(index, 1);
    }

  }
  editMeal(meal) {
    alert("I am working");
  }

  constructor() { }

  ngOnInit() {
  }

}
