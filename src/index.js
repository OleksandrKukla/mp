import React from 'react';
import {render} from 'react-dom';
import * as Router from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

import './style';
import "bootstrap/scss/bootstrap";

const Content = () => (
    <Router.Switch>
        <Router.Route exact path="/" component={Home}/>
        <Router.Route path="/details/:movieID" component={Details}/>
    </Router.Switch>
);

const App = () => (
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

render(
    <Router.BrowserRouter>
        <App/>
    </Router.BrowserRouter>,
    document.getElementById('root')
);
