import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = Number(params['id']);
          this.editMode = params['id'] != null;
          console.log(this.editMode, 'edit mode');
          
      }
    )

  }
}
