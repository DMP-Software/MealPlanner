import { MealPlanner, Ingredient, Category, Recipe, TimeOfDay, Day, Week } from "./interfaces/plannerModels";

const ingredient: Ingredient = {
  name: 'Tomato',
  amount: 2,
  unit: 'pcs'
}

const category: Category = {
  name: 'breakfast'
}

const recipe: Recipe = {
  name: 'Sandwich',
  categories: [category],
  ingredients: [ingredient],
  description: 'Chupa chups sugar plum cookie bear'
}

const timeOfDay: TimeOfDay = {
  name: 'Breakfast'
}

const day: Day = {
  name: 'Monday',
  recipes: new Map([[timeOfDay, [recipe]]])
}

const week: Week = {
  name: 'First week',
  days: [day]
}

export const fakeData: MealPlanner = {
  weeks: [week]
}
