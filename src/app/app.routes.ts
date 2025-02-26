import { Routes } from '@angular/router';

import { RecipesOverviewPageComponent } from './features/recipes/pages/recipes-overview-page/recipes-overview-page.component';
import { RecipeDetailPageComponent } from './features/recipes/pages/recipe-detail-page/recipe-detail-page.component';
import { RecipeCreatePageComponent } from './features/recipes/pages/recipe-create-page/recipe-create-page.component';
import { RecipeUpdatePageComponent } from './features/recipes/pages/recipe-update-page/recipe-update-page.component';

export const routes: Routes = [
    { path: 'recipes', component: RecipesOverviewPageComponent },
    { path: 'recipes/create', component: RecipeCreatePageComponent },
    { path: 'recipes/:id', component: RecipeDetailPageComponent }, 
    { path: 'recipes/:id/update', component: RecipeUpdatePageComponent },  
    { path: '**', redirectTo: 'recipes', pathMatch: 'full' }
];
