import { Injectable } from '@angular/core';

import { Breadcrumb } from '../../models/breadcrumb.model';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {
    private breadcrumbs: Breadcrumb[] =  [{ label: 'Recipes', route: '/recipes' }];

    getBreadcrumbs(): Breadcrumb[] {
        return this.breadcrumbs;
    }

    setBreadcrumbs(type: string, recipe?: { name: string; id: number }): void {
        if (type === 'recipe-detail' && recipe) {
            this.breadcrumbs.push({ label: recipe.name, route: `/recipe/${recipe.id}` });
        } else if (type === 'recipe-create') {
            this.breadcrumbs.push({ label: 'Create New Recipe', route: '/recipes/create' });
        } else if (type === 'recipe-update' && recipe) {
            this.breadcrumbs.push({ label: `Update ${recipe.name}`, route: `/recipes/${recipe.id}/update` });
        }
    }
}
