import React from 'react';

import BackgroundContainer from './BackgroundContainer';

import backgroundImage from '../img/bg.jpg';
import logo from '../img/logo.png';

export default (props) => (
    <footer>
        <BackgroundContainer img={backgroundImage} filter={"rgba(0,0,0,0.8)"}>
            <div className="container">
                {props.children}
                <div className="row pt-3 pb-3">
                    <div className="col">
                        <img className="footer-logo" src={logo} alt="Logo"/>
                    </div>
                </div>
            </div>
        </BackgroundContainer>
    </footer>
);