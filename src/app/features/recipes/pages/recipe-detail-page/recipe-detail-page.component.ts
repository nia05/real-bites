import { Component, OnDestroy, OnInit } from '@angular/core';;
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { Subscription } from 'rxjs';

import { Recipe } from '../../../../shareable/models/recipe.model'

import { RecipeService } from '../../../../shareable/services/recipe/recipe.service'; 

@Component({
    selector: 'app-recipe-detail-page',
    imports: [ CommonModule, MatIconModule ],
    templateUrl: './recipe-detail-page.component.html',
    styleUrl: './recipe-detail-page.component.scss'
})
export class RecipeDetailPageComponent implements OnInit, OnDestroy {
    recipe!: Recipe;
    loading = true;

    private routeSub!: Subscription;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) {}

    ngOnInit(): void {
        this.routeSub = this.route.paramMap.subscribe(params => {
            const recipeId = params.get('ID');
            if (recipeId) {
              this._getRecipe(recipeId);
            }
        });
    }

    private _getRecipe(id: string): void {
        this.recipeService.getRecipeById(Number(id)).subscribe({
            next: (recipe: Recipe) => {
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
