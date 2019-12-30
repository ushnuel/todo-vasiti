import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './home';
import CreateTodo from './TodoComponent/createTodo';

const app = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/create-todo' component={CreateTodo} />
        </Switch>
      </Router>
    </>
  );
};

export default app;
