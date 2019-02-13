import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components/Header/Header.tsx';
import { MealPlanner } from './components/Planner/MealPlanner';
import { AddRecipeForm } from './components/AddRecipe/AddRecipeForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={MealPlanner} />
          <Route path="/add-recipe" component={AddRecipeForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
