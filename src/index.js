import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import './index.css';
import { Router, Route } from 'react-router';

import App from './pages/App';
import About from './pages/About';
import NotFound from './pages/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
