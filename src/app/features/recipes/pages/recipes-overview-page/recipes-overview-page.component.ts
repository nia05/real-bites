import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { RecipeResponse } from '../../../../shareable/models/recipe.model';

import { RecipeService } from '../../../../shareable/services/recipe/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';


@Component({
    selector: 'app-recipes-overview-page',
    imports: [ 
        CommonModule, MatCardModule, RecipeCardComponent, MatProgressBarModule,
        MatPaginatorModule
     ],
    templateUrl: './recipes-overview-page.component.html',
    styleUrl: './recipes-overview-page.component.scss'
})
export class RecipesOverviewPageComponent implements OnInit {
    recipeResponse!: RecipeResponse;
    pageIndex = 0;
    pageSize = 10;
    loading = true;

    constructor(private recipeService: RecipeService) {}

    ngOnInit(): void {
        this._getRecipes();
    }

    onPageChange(event: PageEvent) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.loading = true;
        this._getRecipes(event.pageSize, event.pageIndex * event.pageSize);
    }

    private _getRecipes(page?: number, limit?: number) {
        this.recipeService.getAllRecipes(page, limit).subscribe({
            next: (recipes: RecipeResponse) => {
                this.recipeResponse = recipes;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error fetching recipes:', error);
            }
    });
          
    }
}
