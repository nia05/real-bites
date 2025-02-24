import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Recipe, RecipeResponse } from '../../models/recipe.model';

import { environment } from '../../../../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    private apiUrl = `${environment.apiUrl}/recipes`;

    constructor(private http: HttpClient) {}

    getAllRecipes(limit: number = 10, skip: number = 0, search: string): Observable<RecipeResponse> {
        const params = new HttpParams()
          .set('limit', limit.toString())
          .set('skip', skip.toString());
    
        return this.http.get<RecipeResponse>(this.apiUrl, { params });
    }

    getRecipeById(id: number): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
    }

    addRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.post<Recipe>(this.apiUrl, recipe);
    }

    updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
        return this.http.put<Recipe>(`${this.apiUrl}/${id}`, recipe);
    }

    deleteRecipe(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
