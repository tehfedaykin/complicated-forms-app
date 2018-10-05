import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { RecipesService } from '../../recipes/recipes.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  public mealForm: FormGroup;
  public recipes: any[];

  constructor(
     private fb: FormBuilder,
     private recipesService: RecipesService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe((recipes: any) => {
      this.recipes = recipes;
    });
  }

  createForm() {
    this.mealForm = this.fb.group({
      recipe: [null, Validators.required],
      date: [null, Validators.required]
    });

    this.onChanges();
  }

  onChanges() {

  }

}
