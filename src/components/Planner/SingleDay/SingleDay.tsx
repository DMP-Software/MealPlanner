import * as React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Day, Recipe, TimeOfDay } from '../../../interfaces/plannerModels';
import { TimeOfDayDisplay } from '../TimeOfDayDisplay/TimeOfDayDisplay';

type Props = {
  day: Day;
};

const getRecipes = (recipesMap: Map<TimeOfDay, Recipe[]>) => {
  const recipesNodes: React.ReactNode[] = [];

  recipesMap.forEach((recipes: Recipe[], timeOfDay: TimeOfDay) => {
    const node = <TimeOfDayDisplay timeOfDay={timeOfDay} recipes={recipes} key={timeOfDay.name} />;
    recipesNodes.push(node);
  });

  return recipesNodes;
};

export const SingleDay: React.FunctionComponent<Props> = props => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        {props.day.name}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>{getRecipes(props.day.recipes)}</div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
