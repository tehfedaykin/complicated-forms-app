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

import { RecipesComponent } from './recipes/recipes.component';
import { RecipesService } from './recipes/recipes.service';

import { RecipeComponent } from './recipes/recipe/recipe.component';
import { NavComponent } from './nav/nav.component';

import { MyTypeaheadComponent } from './common/typeahead/typeahead.component';
import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealComponent } from './meals/meal/meal.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent,
    MyTypeaheadComponent,
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
    AppRoutingModule
  ],
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
