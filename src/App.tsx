import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/app.scss';
import { Header } from './components/Header/Header';
import { MainPage } from './components/pages/MainPage';
import { MyGoalsPage } from './components/pages/MyGoalsPage/MyGoalsPage';
import { myActivitiesPage } from './components/pages/MyActivitiesPage/MyActivitiesPage';
import { ProgressReportPage } from './components/pages/ProgressReportPage/ProgressReportPage';
import {
  MAIN_PAGE_PATH,
  MY_GOALS_PAGE_PATH,
  MY_ACTIVITIES_PAGE_PATH,
  PROGRESS_REPORT_PAGE_PATH
} from './constants/paths';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <section className="app__main-content">
          <Switch>
            <Route exact path={MAIN_PAGE_PATH} component={MainPage} />
            <Route path={MY_GOALS_PAGE_PATH} component={MyGoalsPage} />
            <Route path={MY_ACTIVITIES_PAGE_PATH} component={myActivitiesPage} />
            <Route path={PROGRESS_REPORT_PAGE_PATH} component={ProgressReportPage} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
