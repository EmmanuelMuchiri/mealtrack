import { Component, OnInit } from '@angular/core';
import { Mealss } from '../mealss';

@Component({
  selector: 'app-meal-tracker',
  templateUrl: './meal-tracker.component.html',
  styleUrls: ['./meal-tracker.component.css']
})
export class MealTrackerComponent implements OnInit {

  meals = Mealss;
  addNewMeal(meal) {
    let mealLength = this.meals.length;
    meal.id = mealLength + 1;
    this.meals.push(meal)
  }

  constructor() { }

  ngOnInit() {
  }

}
