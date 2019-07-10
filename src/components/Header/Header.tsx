import * as React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header: React.FunctionComponent = React.memo(() => {
  return (
    <div className="header">
      <Link to="/" className="header__btn btn--default">
        Meal planner
      </Link>
    </div>
  );
});
