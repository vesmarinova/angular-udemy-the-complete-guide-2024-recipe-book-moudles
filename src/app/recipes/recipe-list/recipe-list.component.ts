import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  
  recipes:Recipe[]=[
    // new Recipe('A Test Recipe' ,'Simply a test')
    new Recipe('A Test Recipe', 'Simply a test', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/252558c4-317a-46fb-a0e1-a95ca3180346/dhns2u4-1843942e-7e6f-4f06-9988-5f854046c4cc.jpg/v1/fill/w_894,h_894,q_70,strp/fried_egg_meal_by_ninjeai_dhns2u4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzI1MjU1OGM0LTMxN2EtNDZmYi1hMGUxLWE5NWNhMzE4MDM0NlwvZGhuczJ1NC0xODQzOTQyZS03ZTZmLTRmMDYtOTk4OC01Zjg1NDA0NmM0Y2MuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.39csnQ1QjQjjAlgp-LAs9pmoajDHEVsrC36qSX6OtDE'),
    
    new Recipe('A Test Recipe', 'Simply a test', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/252558c4-317a-46fb-a0e1-a95ca3180346/dhns2u4-1843942e-7e6f-4f06-9988-5f854046c4cc.jpg/v1/fill/w_894,h_894,q_70,strp/fried_egg_meal_by_ninjeai_dhns2u4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzI1MjU1OGM0LTMxN2EtNDZmYi1hMGUxLWE5NWNhMzE4MDM0NlwvZGhuczJ1NC0xODQzOTQyZS03ZTZmLTRmMDYtOTk4OC01Zjg1NDA0NmM0Y2MuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.39csnQ1QjQjjAlgp-LAs9pmoajDHEVsrC36qSX6OtDE'),
  ];
  constructor() {

  }

  ngOnInit(){

  }
}
