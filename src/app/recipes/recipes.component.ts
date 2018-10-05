import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent implements OnInit {
  public recipes: any[];
  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

}
