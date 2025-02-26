import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../../../shareable/models/breadcrumb.model';

import { BreadcrumbComponent } from '../../../../shareable/components/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from '../../../../shareable/services/breadcrumb/breadcrumb.service';

@Component({
    selector: 'app-recipes-create-page',
    imports: [BreadcrumbComponent],
    templateUrl: './recipes-create-page.component.html',
    styleUrl: './recipes-create-page.component.scss'
})
export class RecipesCreatePageComponent implements OnInit {
    breadcrumbList!: Breadcrumb[];

    constructor(private breadcrumbService: BreadcrumbService) {}

    ngOnInit(): void {
        this.breadcrumbService.setBreadcrumbs('recipe-create');
        this.breadcrumbList = this.breadcrumbService.getBreadcrumbs();
    }
}
