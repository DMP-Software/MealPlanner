import * as React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Planner } from './components/Planner/Planner';

export const App: React.FunctionComponent = () => {
    return (
      <div className="app">
        <Header/>
        <Route exact path='/' component={Planner} />
      </div>
    );
};
