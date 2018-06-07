import 'isomorphic-fetch';
import React from 'react';
import * as RouterDOM from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Provider} from 'react-redux';

import {fetchData} from '../redux/actions';

import Home from '../pages/Home';
import Details from '../containers/Details.container';
import NotFound from '../pages/NotFound';

import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

import '../style.css';

export const Content = () => (
    <RouterDOM.Switch>
        <RouterDOM.Route exact path="/" component={Home}/>
        <RouterDOM.Route path="/details/:movieID" component={Details}/>
        <RouterDOM.Route path="*" component={NotFound}/>
    </RouterDOM.Switch>
);

class App extends React.PureComponent {

    componentWillMount() {
        const location = this.props.location;

        const search = (typeof location === 'string')
            ? location.split('?')[1]
            : window && window.location.search;

        this.props.fetchData(search);
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <this.props.Router location={this.props.location} context={this.props.context}>
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
                </this.props.Router>
            </Provider>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchData}, dispatch);
}

export default connect(null, mapDispatchToProps, null, {pure: false})(App);