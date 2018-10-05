import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TypeaheadModule } from 'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes);

import {AppRoutingModule} from './app-router.module';

import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesService } from './recipes/recipes.service';

import { MealsComponent } from './meals/meals.component';
import { MealComponent } from './meals/meal/meal.component';
import { CommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent,
    NavComponent,
    MealsComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    TypeaheadModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
