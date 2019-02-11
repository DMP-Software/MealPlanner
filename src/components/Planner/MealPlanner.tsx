import * as React from 'react';

import { Week } from '../../interfaces/plannerModels';
import { fakeData } from '../../mocks/fakeData';
import { WeekDisplay } from './WeekDisplay/WeekDisplay';

const getCurrentWeek = (weeks: Week[]) => {
  const lastWeek = weeks[weeks.length - 1];

  return lastWeek;
};

export const MealPlanner: React.FunctionComponent = () => {
  return (
    <section>
      <WeekDisplay week={getCurrentWeek(fakeData.weeks)} />
    </section>
  );
};
