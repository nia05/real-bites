import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class RecipeCardComponent implements OnChanges {
    @Input() recipe!: Recipe;

    test = true;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['recipe']?.currentValue) {
           this.test = false;
        }
    }
}
