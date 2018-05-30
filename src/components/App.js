import React from 'react';
import * as Router from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchData} from '../redux/actions';

import Home from '../pages/Home';
import Details from '../containers/Details.container';
import NotFound from '../pages/NotFound';

import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

import '../style.css';
import "bootstrap/scss/bootstrap.scss";

export const Content = () => (
    <Router.Switch>
        <Router.Route exact path="/" component={Home}/>
        <Router.Route path="/details/:movieID" component={Details}/>
        <Router.Route path="*" component={NotFound}/>
    </Router.Switch>
);

class App extends React.PureComponent {
    componentDidMount() {
        this.props.fetchData(this.props.location.search);
    }

    render() {
        return (
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
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchData}, dispatch);
}

const AppWithRouter = withRouter(App);

export default connect(null, mapDispatchToProps, null, {pure: false})(AppWithRouter);