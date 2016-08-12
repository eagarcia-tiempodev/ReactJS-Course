import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App';
import Home from './components/pages/Home';
import MovieListPage from './components/pages/MovieListPage';
import MovieDetailPage from './components/pages/MovieDetailPage';

const Routes = (
   <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={MovieListPage} />
        <IndexRoute component={Home} />
            <Route path="genre/:id" component={MovieListPage} />
            <Route path="movie/:id" component={MovieDetailPage} />
        </Route>
    </Router>
);


ReactDOM.render(Routes, document.getElementById('app'));
