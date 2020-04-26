import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './components/Menu';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Redirect from='/about2' to='/about' />
      </Switch>
    </>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
