import React from 'react';

import MovieList from '../containers/MovieList.container';
import HelpLine from '../containers/HelpLine.container';

export default class Home extends React.PureComponent {

    render() {
        return (
            <React.Fragment>
                <HelpLine/>
                <div className="container">
                    <MovieList/>
                </div>
            </React.Fragment>
        )
    }
}