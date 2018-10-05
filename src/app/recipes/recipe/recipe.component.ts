import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { RecipesService } from '../recipes.service';
@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {
  public recipeForm: FormGroup;
  public categories: any[];
  public subcategories: any[];
  public recipe;
  public recipeFormData;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {
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
    ];
    this.subcategories = [
      {
        name: 'paleo',
        id: 1
      },
      {
        name: 'keto',
        id: 2
      },
      {
        name: 'fall',
        id: 3
      },
      {
        name: 'spring',
        id: 4
      },
      {
        name: 'summer',
        id: 5
      },
      {
        name: 'instant pot',
        id: 6
      },
      {
        name: 'meal prep',
        id: 7
      },
      {
        name: 'seafood',
        id: 8
      },
      {
        name: 'pork',
        id: 9
      },
      {
        name: 'vegan',
        id: 10
      },
      {
        name: 'vegetarian',
        id: 11
      }
    ]
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipe = this.recipesService.getRecipe(id);
      this.setFormValues(this.recipe);
    }
    else {
      this.createForm();
    }
  }

  amountValidator(c: FormControl) {
    return c.value > 340 ? null : {
      validAmount: {
        valid: false
      }
    };
  }

  createForm() {
    this.recipeForm = this.fb.group({
      name: [null, Validators.required],
      description: [null],
      source: [null],
      category: [null],
      subcategory: [[]],
      ingredients: this.fb.array([]),
      calories: [null, [Validators.required, this.amountValidator]]
    });
    this.onChanges();
  }

  setFormValues(data) {
    this.recipeForm = this.fb.group({
      name: [data.name ? data.name : null, Validators.required],
      description: [data.description ? data.description :  null],
      source: [data.source ? data.source :  null],
      category: [data.category ? data.category :  null],
      subcategory: [data.subcategory ? data.subcategory : []],
      ingredients: this.fb.array([]),
      calories: [data.calories, Validators.required, this.amountValidator]
    });

    const arrayControl = <FormArray>this.recipeForm.controls['ingredients'];
    data.ingredients.forEach(item => {
       const newGroup = this.fb.group({
        name: [item.name, [Validators.required]],
        amount: [item.amount, [Validators.required]]
      });
      arrayControl.push(newGroup);
    });
  }

  onChanges() {
    this.recipeForm.get('category').valueChanges.subscribe(val => {
      const subCategoryControl = this.recipeForm.get('subcategory');
      if (val) {
        //update our validators
        subCategoryControl.setValidators(Validators.required);
        //update formControl validity based on new validators
        subCategoryControl.updateValueAndValidity();
      }
      else {
        //remove validators cause we don't want them if no category val
        subCategoryControl.setValidators(null);
        //update formControl validity based on new validators
        //in case they were marked as invalid from previously
        subCategoryControl.updateValueAndValidity();
      }
    });
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.recipeFormData = this.recipeForm.value;
      //normally we'd make a call to our service to save here
      //I'm just showing ya'll the form output in the demo markup
    }
    else {
      Object.keys(this.recipeForm.controls).forEach(field => {
        const control = this.recipeForm.get(field);

        //handle if basic FormControl
        if (!control['controls']) {
          //I prefer to show my validation for untouched fields only on save,
          //I think it's clearer to the user
          control.markAsTouched({ onlySelf: true });
        }
        //handle if FormArray
        else {
          let nestedFormArray = control['controls'];
          nestedFormArray.forEach(subcCtrlGp => {
            Object.keys(subcCtrlGp['controls']).forEach(subField => {
              const nestedControl = subcCtrlGp.get(subField);
              nestedControl.markAsTouched({ onlySelf: true });
            });
          });
          //can extract this to a recursive function for deeply nested forms
        }
     })
    }

  }

  public addIngredient() {
    const ingredientsFormArray = <FormArray>this.recipeForm.controls['ingredients'];
    const ingredientFormGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required])
    });
    ingredientsFormArray.push(ingredientFormGroup);
  }

  public removeIngredient(i) {
    const ingredientsFormArray = <FormArray>this.recipeForm.controls['ingredients'];
    ingredientsFormArray.removeAt(i);
  }

}
