import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-udemy-the-complete-guide-2024-recipe-book-moudles';

  loadedFeature='recipe';

  onNavigate(feature:string){
    console.log(feature);
    this.loadedFeature=feature;
  }
  
}
