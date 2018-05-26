import React from 'react';
import {Link} from 'react-router-dom';

import Button from '../components/Button';

export default class Home extends React.PureComponent {

    render() {
        return (
            <React.Fragment>
                <div className="h1 text-danger text-center p-3">
                    Page Not Found
                </div>
                <div className="text-center">
                    <Link to="/">
                        <Button title="Go to main page"/>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}