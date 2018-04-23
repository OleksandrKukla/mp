import React from "react";
import { render } from "react-dom";
import Component1 from "./Component1";
import './style.css';

const styles = {
    fontFamily: "sans-serif"
};

class Component2 extends React.Component {
    constructor() {
        super();
        this.state = {
            showMessage: false
        };
    }

    showHideMessage = () => {
        this.setState({ showMessage: !this.state.showMessage });
    }

    render() {
        return (
            <div className="component" onClick={this.showHideMessage}>
                Component 2 says (click to show/hide):{" "}
                {this.state.showMessage ? this.props.message : ""}
            </div>
        );
    }
}

class Component3 extends React.PureComponent {
    render() {
        return (
            <div className="component">Component 3 says: {this.props.message}</div>
        );
    }
}

const Component4 = ({ message }) => {
    return <div className="component">Component 4 says: {message}</div>;
};

const App = () => (
    <div style={styles}>
    <Component1 message="Hello !" />
    <Component2 message="Hello !!" />
    <Component3 message="Hello !!!" />
    <Component4 message="Hello !!!!" />
    </div>
);

render(<App />, document.getElementById("root"));
