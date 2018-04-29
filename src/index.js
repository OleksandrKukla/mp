import React from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentWrapper from "./components/ContentWrapper";

import './style';
import "bootstrap/scss/bootstrap";

const App = () => (
    <React.Fragment>
        <Header/>
        <ContentWrapper/>
        <Footer/>
    </React.Fragment>
);

render(<App />, document.getElementById("root"));
