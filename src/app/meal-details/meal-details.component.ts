import { Component, OnInit } from '@angular/core';
import { Meals } from '../meals'

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  meals: Meals[] = [
    new Meals(1,'Ugali',300,'Starch'),
    new Meals(2,'Chapati',200,'Protein'),
    new Meals(3,'Nyama',200,'Protein')
  ];
  constructor() { }

  ngOnInit() {
  }

}
