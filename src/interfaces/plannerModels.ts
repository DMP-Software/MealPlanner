export interface Ingredient {
  name: string;
  amount: number;
  unit: string; // TODO: enum
}

// TODO: list of available categories
export interface Category {
  name: string;
}

export interface Recipe {
  name: string;
  categories: Category[];
  ingredients: Ingredient[];
  description: string;
}

export interface TimeOfDay {
  name: string;
}

export interface Day {
  name: string;
  recipes: Map<TimeOfDay, Recipe[]>;
}

export interface Week {
  name: string;
  days: Day[];
}

export interface MealPlanner {
  weeks: Week[];
}
