import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RecipesService {

  constructor() { }

  getRecipes() { 
    return [
      {
        id: 1,
        name: 'Taco Bowl',
        description: 'yummy taco bowl',
        source: 'my head',
        category: 'breakfast',
        subcategory: 'keto',
        ingredients: [
          {
            name: 'ground beef',
            amount: '4 oz'
          },
          {
            name: 'tomatos',
            amount: '3 oz'
          }
        ]
      },
      {
        id: 2,
        name: 'Greek Chicken Bowl',
        description: 'yummy taco bowl',
        source: 'my head',
        category: 'breakfast',
        subcategory: 'keto',
        ingredients: [
          {
            name: 'ground beef',
            amount: '4 oz'
          },
          {
            name: 'tomatos',
            amount: '3 oz'
          }
        ]
      }
    ]
  }

  getRecipe(id: string) {
    return {
      id: 2,
      name: 'Greek Chicken Bowl',
      description: 'yummy taco bowl',
      source: 'my head',
      category: 'breakfast',
      subcategory: 'keto',
      ingredients: [
        {
          name: 'ground beef',
          amount: '4 oz'
        },
        {
          name: 'tomatos',
          amount: '3 oz'
        }
      ]
    }
  }

}
