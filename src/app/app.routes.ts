import { Routes } from '@angular/router';

import { RecipesOverviewPageComponent } from './features/recipes/pages/recipes-overview-page/recipes-overview-page.component';
import { RecipesDetailPageComponent } from './features/recipes/pages/recipes-detail-page/recipes-detail-page.component';
import { RecipesCreatePageComponent } from './features/recipes/pages/recipes-create-page/recipes-create-page.component';
import { RecipesUpdatePageComponent } from './features/recipes/pages/recipes-update-page/recipes-update-page.component';

export const routes: Routes = [
    { path: 'recipes', component: RecipesOverviewPageComponent },
    { path: 'recipes/create', component: RecipesCreatePageComponent },
    { path: 'recipes/:id', component: RecipesDetailPageComponent }, 
    { path: 'recipes/:id/update', component: RecipesUpdatePageComponent },  
    { path: '**', redirectTo: 'recipes', pathMatch: 'full' }
];
