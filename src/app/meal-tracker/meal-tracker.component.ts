import { Component, OnInit } from '@angular/core';
import { Meals } from '../meals';
@Component({
  selector: 'app-meal-tracker',
  templateUrl: './meal-tracker.component.html',
  styleUrls: ['./meal-tracker.component.css']
})
export class MealTrackerComponent implements OnInit {
  meals: Meals[] = [
    new Meals(1, 'Ugali',300,'Starch'),
    new Meals(2, 'Chapati',200,'Protein')
  ];

  constructor() { }

  ngOnInit() {
  }

}
