import React from 'react';
import * as Router from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchData} from '../redux/actions';

import Home from '../pages/Home';
import Details from '../containers/Details.container';

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

class App extends React.PureComponent {
    componentDidMount() {
        this.props.fetchData('http://react-cdp-api.herokuapp.com/movies');
    }

    render() {
        return (
            <Router.BrowserRouter>
                <React.Fragment>
                    <ErrorBoundary>
                        <Header/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Content/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Footer/>
                    </ErrorBoundary>
                </React.Fragment>
            </Router.BrowserRouter>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchData}, dispatch);
}


export default connect(null, mapDispatchToProps)(App);