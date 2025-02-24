import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Recipe } from '../../../../shareable/models/recipe.model';

@Component({
    selector: 'app-recipe-card',
    imports: [ MatCardModule, CommonModule, MatIconModule ],
    templateUrl: './recipe-card.component.html',
    styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
    @Input() recipe!: Recipe;

}
