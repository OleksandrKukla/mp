import React from 'react';
import * as Router from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';

import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

import '../style.css';
import "bootstrap/scss/bootstrap.scss";

export const Content = () => (
    <Router.Switch>
        <Router.Route exact path="/" component={Home}/>
        <Router.Route path="/details/:movieID" component={Details}/>
    </Router.Switch>
);

export const App = () => (
    <React.Fragment>
        <ErrorBoundary>
            <Header />
        </ErrorBoundary>
        <ErrorBoundary>
            <Content />
        </ErrorBoundary>
        <ErrorBoundary>
            <Footer/>
        </ErrorBoundary>
    </React.Fragment>
);

export default App;