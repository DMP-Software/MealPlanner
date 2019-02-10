import * as React from 'react';

import { fakeData } from '../../mocks/fakeData';
import { WeekDisplay } from './WeekDisplay/WeekDisplay';
import { Week } from '../../interfaces/plannerModels';

const getCurrentWeek = (weeks: Week[]) => {
  const lastWeek = weeks[weeks.length - 1];

  return <WeekDisplay week={lastWeek}/>
}

export const MealPlanner: React.FunctionComponent = () => {
  return (
    <section>
        {getCurrentWeek(fakeData.weeks)}
    </section>
  );
}