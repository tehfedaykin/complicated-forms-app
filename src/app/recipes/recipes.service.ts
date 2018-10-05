import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { filter } from 'rxjs/operators';


@Injectable()
export class RecipesService {

  constructor() { }

  getRecipes(): Observable <any>  {
    return of([
      {
        id: 1,
        name: 'Taco Bowl',
        description: 'yummy taco bowl',
        source: 'my head',
        category: 1,
        subcategory: [2],
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
        category: 2,
        subcategory: [2, 4],
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
    ])
  }

  getRecipe(id: number): Observable <any> {
    let recipe;
    this.getRecipes().subscribe((response: any) => {
      recipe = response.filter(recipe => recipe['id'] === id)[0];
    });
    return recipe
  }

}
