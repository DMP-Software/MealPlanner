import * as React from 'react';

import './weekDisplay.scss';
import { Day, Week } from '../../../interfaces/plannerModels';
import { SingleDay } from '../SingleDay/SingleDay';

type Props = {
  week: Week;
};

const getDays = (days: Day[]) => {
  return days.map((day, i) => <SingleDay day={day} key={`${day.name}_${i}`} />);
};

export const WeekDisplay: React.FunctionComponent<Props> = props => {
  return (
    <section className="week">
      <h3 className="week__name">{props.week.name}</h3>
      {getDays(props.week.days)}
    </section>
  );
};
