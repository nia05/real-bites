import { Component } from '@angular/core';

import { BreadcrumbComponent } from '../../../../shareable/components/breadcrumb/breadcrumb.component';

import { Breadcrumb } from '../../../../shareable/models/breadcrumb.model';

import { BreadcrumbService } from '../../../../shareable/services/breadcrumb/breadcrumb.service';

@Component({
    selector: 'app-recipes-update-page',
    imports: [BreadcrumbComponent],
    templateUrl: './recipes-update-page.component.html',
    styleUrl: './recipes-update-page.component.scss'
})
export class RecipesUpdatePageComponent {
    breadcrumbList!: Breadcrumb[];

    constructor(private breadcrumbService: BreadcrumbService) {}

    ngOnInit(): void {
        this.breadcrumbService.setBreadcrumbs('recipe-create');
        this.breadcrumbList = this.breadcrumbService.getBreadcrumbs();
    }
}
