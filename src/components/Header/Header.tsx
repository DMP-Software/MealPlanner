import * as React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import {
  MAIN_PAGE_PATH,
  MY_GOALS_PAGE_PATH,
  PROGRESS_REPORT_PAGE_PATH,
  MY_ACTIVITIES_PAGE_PATH
} from '../../constants/paths';

export const Header: React.FunctionComponent = React.memo(() => {
  return (
    <div className="header">
      <Link to={MAIN_PAGE_PATH} className="header__btn btn--default">
        Main
      </Link>
      <Link to={MY_GOALS_PAGE_PATH} className="header__btn btn--default">
        My Goals
      </Link>
      <Link to={MY_ACTIVITIES_PAGE_PATH} className="header__btn btn--default">
        My Activities
      </Link>
      <Link to={PROGRESS_REPORT_PAGE_PATH} className="header__btn btn--default">
        Progress
      </Link>
    </div>
  );
});
