import { Difficulty } from "../enums/difficulty.enum";

export interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: Difficulty;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}
  
export interface RecipeResponse {
    limit: number;
    skip: number;
    total: number;
    recipes: Recipe[];
}
  