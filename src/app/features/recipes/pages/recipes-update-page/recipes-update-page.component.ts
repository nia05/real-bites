import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { BreadcrumbComponent } from '../../../../shareable/components/breadcrumb/breadcrumb.component';

import { Breadcrumb } from '../../../../shareable/models/breadcrumb.model';
import { Recipe } from '../../../../shareable/models/recipe.model';

import { BreadcrumbService } from '../../../../shareable/services/breadcrumb/breadcrumb.service';
import { RecipeService } from '../../../../shareable/services/recipe/recipe.service';

@Component({
    selector: 'app-recipes-update-page',
    imports: [BreadcrumbComponent],
    templateUrl: './recipes-update-page.component.html',
    styleUrl: './recipes-update-page.component.scss'
})
export class RecipesUpdatePageComponent implements OnInit, OnDestroy {
    breadcrumbList!: Breadcrumb[];
    recipe!: Recipe;
    loading = false;
    
    private routeSub!: Subscription;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private breadcrumbService: BreadcrumbService
    ) {}

    ngOnInit(): void {
        this.routeSub = this.route.paramMap.subscribe(params => {
            const recipeId = params.get('id');
            if (recipeId) {
              this._getRecipe(recipeId);
            }
        });
    }

    private _getRecipe(id: string): void {
        this.recipeService.getRecipeById(Number(id)).subscribe({
            next: (recipe: Recipe) => {
                this.breadcrumbService.setBreadcrumbs('recipe-update', {name: recipe.name, id: recipe.id});
                this.breadcrumbList = this.breadcrumbService.getBreadcrumbs();
                this.recipe = recipe; 
                this.loading = false;
            },
            error: (error) => {
                console.error('Error fetching recipe details:', error);
                this.loading = false;
            }
        });
    }

    ngOnDestroy() {
        if (this.routeSub) {
            this.routeSub.unsubscribe(); 
        }
    }
}
