import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import TodoDetails from './views/TodoDetails';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/todo/:id" component={TodoDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
