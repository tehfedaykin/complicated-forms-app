import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeComponent } from "./recipes/recipe/recipe.component";
import { MealsComponent } from "./meals/meals.component";
import { MealComponent } from "./meals/meal/meal.component";


const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'recipes/:id',
    component: RecipeComponent,
  },
  {
    path: 'new-recipe',
    component: RecipeComponent,
  },
  {
    path: 'meals',
    component: MealsComponent,
  },
  {
    path: 'meal/:id',
    component: MealComponent,
  },
  {
    path: 'add-meal',
    component: MealComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {

  }
}
