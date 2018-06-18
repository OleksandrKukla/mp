import React from 'react';
import * as Router from 'react-router-dom';
import {createGenerateClassName, JssProvider} from 'react-jss'

import BackgroundContainer from './BackgroundContainer';
import Search from './Search';
import MovieDetails from '../containers/MovieDetails.container';
import Button from './Button';

import backgroundImage from '../img/bg.jpg';
import logo from '../img/logo.png';

const SearchButton = () => (
    <Router.Link to="/" className="float-right">
        <Button title="SEARCH" />
    </Router.Link>
);

const generateClassName = createGenerateClassName();

export default props => (
    <header>
        <JssProvider generateClassName={generateClassName}>
            <BackgroundContainer img={backgroundImage} filter="rgba(0,0,0,0.4)">
                <div className="container">
                    <div className="row pt-3 pb-3">
                        <div className="col">
                            <img className="header-logo" src={logo} alt="Logo"/>
                        </div>
                        <Router.Switch>
                            <Router.Route exact path="/details/:movieID" component={SearchButton}/>
                        </Router.Switch>
                    </div>

                    <Router.Switch>
                        <Router.Route exact path="/" component={Search}/>
                        <Router.Route path="/details/:movieID" component={MovieDetails}/>
                    </Router.Switch>

                    {props.children}
                </div>
            </BackgroundContainer>
        </JssProvider>
    </header>
);
