import { Component } from '@angular/core';

import { Breadcrumb } from '../../../../shareable/models/breadcrumb.model';

import { BreadcrumbComponent } from '../../../../shareable/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-recipe-create-page',
    imports: [BreadcrumbComponent],
    templateUrl: './recipe-create-page.component.html',
    styleUrl: './recipe-create-page.component.scss'
})
export class RecipeCreatePageComponent {
    breadcrumbList: Breadcrumb[] = [
        {label: 'Recipes', route: '/recipes'},
        {label: 'Create New Recipe', route: '/recipes/create'},
    ];
}
