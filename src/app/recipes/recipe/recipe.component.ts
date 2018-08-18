import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {
  public recipeForm: FormGroup;
  public categories: any[];

  constructor(
     private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.categories = [
      {
        name: 'breakfast',
        id: 1
      },
      {
        name: 'lunch',
        id: 2
      },
      {
        name: 'appetizer',
        id: 3
      },
      {
        name: 'dinner',
        id: 4
      },
      {
        name: 'side',
        id: 5
      },{
        name: 'dessert',
        id: 6
      }
    ]
  }

  createForm() {
    this.recipeForm = this.fb.group({
      clientName: [null, Validators.required],
      name: [null, Validators.required],
      description: [null],
      source: [null],
      category: [null],
      subcategory: [null],
      ingredients: this.fb.array([])
    });

    this.onChanges();
  }

  setFormValues() {

  }

  onChanges() {
    this.recipeForm.get('category').valueChanges.subscribe(val => {
      console.log('val change', val);
      if (val) {
        let subCategoryControl = this.recipeForm.get('subcategory');
        subCategoryControl.setValidators(Validators.required);
        subCategoryControl.updateValueAndValidity();
      }
    });
  }

  public addIngredient() {
    let ingredientsControl = <FormArray>this.recipeForm.controls['ingredients'];
    let ingredientFormGroup = this.fb.group({
      name: [null, [Validators.required]],
      amount: [null, [Validators.required]]
    });
    ingredientsControl.push(ingredientFormGroup);
 }

  public removeIngredient(i) {
    let ingredientsControl = <FormArray>this.recipeForm.controls['ingredients'];
    ingredientsControl.removeAt(i);
  }

}
