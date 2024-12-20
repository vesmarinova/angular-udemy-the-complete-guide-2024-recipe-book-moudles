import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipeDetails: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.route.params.subscribe((params:Params) => {
     this.id =Number(params['id']); 
     this.selectedRecipeDetails = this.recipeService.getRecipe(this.id);
     
   })
   
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.selectedRecipeDetails.ingredients
    );
  }


  onEditRecipe () {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
