import * as React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Day } from '../../../interfaces/plannerModels';

type Props = {
  day: Day;
};

export const SingleDay: React.FunctionComponent<Props> = props => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        {props.day.name}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
        amet blandit leo lobortis eget.
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
