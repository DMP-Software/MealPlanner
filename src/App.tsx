import * as React from 'react';

import { Header } from './components/Header/Header';

export const App: React.FunctionComponent = () => {
    return (
      <div className="app">
        <Header/>
        <div>Main Page</div>
      </div>
    );
};
