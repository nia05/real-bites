import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { BreadcrumbComponent } from '../../../../shareable/components/breadcrumb/breadcrumb.component';

import { RecipeResponse } from '../../../../shareable/models/recipe.model';
import { Breadcrumb } from '../../../../shareable/models/breadcrumb.model';

import { RecipeService } from '../../../../shareable/services/recipe/recipe.service';

@Component({
    selector: 'app-recipes-overview-page',
    imports: [ 
        CommonModule, RecipeCardComponent, MatProgressBarModule,
        MatPaginatorModule, MatInputModule, MatIconModule, MatFormFieldModule, 
        BreadcrumbComponent, MatButtonModule, MatTooltipModule
     ],
    templateUrl: './recipes-overview-page.component.html',
    styleUrl: './recipes-overview-page.component.scss'
})
export class RecipesOverviewPageComponent implements OnInit, OnDestroy {
    recipeResponse!: RecipeResponse;
    pageIndex = 0;
    pageSize = 10;
    loading = true;

    breadcrumbList: Breadcrumb[] = [
        {label: 'Recipes', route: '/recipes'}
    ];

    private search$ = new Subject<string>();  
    private destroy$ = new Subject<void>();

    constructor(
        private router: Router,
        private recipeService: RecipeService
    ) {}

    ngOnInit(): void {
        this._getRecipes();

        this.search$.pipe(
            debounceTime(500), 
            distinctUntilChanged(),
            takeUntil(this.destroy$)
        ).subscribe((searchTerm: string) => {
            this.pageIndex = 0;
            this.loading = true;
            this._getRecipes(this.pageSize, 0, searchTerm);
        });
    }

    onPageChange(event: PageEvent) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.loading = true;
        this._getRecipes(event.pageSize, event.pageIndex * event.pageSize);
    }

    onSearch(keyword: string): void {
        this.search$.next(keyword)
    }

    onRecipeRediect(recipeID: number) {
        this.router.navigate(['/recipes', recipeID]);
    }

    onRecipeCreateRedirect() {
        this.router.navigate(['/recipes', 'create']);
    }

    private _getRecipes(page?: number, limit?: number, search = '') {
        this.recipeService.getAllRecipes(page, limit, search!).subscribe({
            next: (recipes: RecipeResponse) => {
                this.recipeResponse = recipes;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error fetching recipes:', error);
            }
        });  
    }

    ngOnDestroy() {
        this.destroy$.next(); // Clean up observables to prevent memory leaks
        this.destroy$.complete();
    }

}
