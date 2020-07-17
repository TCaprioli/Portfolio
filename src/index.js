import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing.js';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path="/" component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Project}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
