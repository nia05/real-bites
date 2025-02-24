import { Routes } from '@angular/router';

import { RecipesOverviewPageComponent } from './features/recipes/pages/recipes-overview-page/recipes-overview-page.component';

export const routes: Routes = [
    { path: 'recipes', component: RecipesOverviewPageComponent},
    { path: '**', redirectTo: 'recipes', pathMatch: 'full'}
];
