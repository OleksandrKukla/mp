import React from 'react';

import BackgroundContainer from './BackgroundContainer';
import Search from './Search';

import backgroundImage from '../img/bg.jpg';
import logo from '../img/logo.png';

export default (props) => (
    <header>
        <BackgroundContainer img={backgroundImage} filter={"rgba(0,0,0,0.4)"}>
                <div className="container">
                    <div className="row pt-3 pb-3">
                        <div className="col text-center">
                            <img className="header-logo" src={logo} alt="Logo"/>
                        </div>
                    </div>
                    <Search/>
                    {props.children}
                </div>
        </BackgroundContainer>
    </header>
);