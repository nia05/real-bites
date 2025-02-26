import { Component } from '@angular/core';

import { Breadcrumb } from '../../../../shareable/models/breadcrumb.model';

import { BreadcrumbComponent } from '../../../../shareable/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-recipes-create-page',
    imports: [BreadcrumbComponent],
    templateUrl: './recipes-create-page.component.html',
    styleUrl: './recipes-create-page.component.scss'
})
export class RecipesCreatePageComponent {
    breadcrumbList: Breadcrumb[] = [
        {label: 'Recipes', route: '/recipes'},
        {label: 'Create New Recipe', route: '/recipes/create'},
    ];
}
