import * as React from 'react';

import './timeOfDayDisplay.scss';
import { TimeOfDay, Recipe } from '../../../interfaces/plannerModels';

type Props = {
  timeOfDay: TimeOfDay;
  recipes: Recipe[];
};

const getRecipes = (recipes: Recipe[]) => {
  const recipeNames = recipes.map(recipe => recipe.name);
  return <span className="timeOfDay__recipe">{recipeNames.join(', ')}</span>;
};

export const TimeOfDayDisplay: React.FunctionComponent<Props> = props => {
  return (
    <div className="timeOfDay">
      <span className="timeOfDay__name">{props.timeOfDay.name}:</span>
      {getRecipes(props.recipes)}
    </div>
  );
};
