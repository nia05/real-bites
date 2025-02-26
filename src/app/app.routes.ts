import { Routes } from '@angular/router';

import { RecipesOverviewPageComponent } from './features/recipes/pages/recipes-overview-page/recipes-overview-page.component';
import { RecipeDetailPageComponent } from './features/recipes/pages/recipe-detail-page/recipe-detail-page.component';
import { RecipesCreatePageComponent } from './features/recipes/pages/recipes-create-page/recipes-create-page.component';
import { RecipeUpdatePageComponent } from './features/recipes/pages/recipe-update-page/recipe-update-page.component';

export const routes: Routes = [
    { path: 'recipes', component: RecipesOverviewPageComponent },
    { path: 'recipes/create', component: RecipesCreatePageComponent },
    { path: 'recipes/:id', component: RecipeDetailPageComponent }, 
    { path: 'recipes/:id/update', component: RecipeUpdatePageComponent },  
    { path: '**', redirectTo: 'recipes', pathMatch: 'full' }
];
