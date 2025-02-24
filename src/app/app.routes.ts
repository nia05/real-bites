import { Routes } from '@angular/router';

import { RecipesOverviewPageComponent } from './features/recipes/pages/recipes-overview-page/recipes-overview-page.component';
import { RecipeDetailPageComponent } from './features/recipes/pages/recipe-detail-page/recipe-detail-page.component';

export const routes: Routes = [
    { path: 'recipes', component: RecipesOverviewPageComponent},
    { path: 'recipe/:ID', component: RecipeDetailPageComponent},
    { path: '**', redirectTo: 'recipes', pathMatch: 'full'}
];
