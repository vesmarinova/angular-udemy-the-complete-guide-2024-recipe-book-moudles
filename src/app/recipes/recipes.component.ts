import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { log } from 'console';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
selectedRecipe: Recipe;
  
getSelectedRecipe (recipe: Recipe) {
  this.selectedRecipe = recipe;
  console.log(this.selectedRecipe, ' recipes component got the recipe, yay!');
}


}