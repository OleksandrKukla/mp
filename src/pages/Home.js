import React from 'react';

import MovieList_container from '../containers/MovieList_container';
import HelpLine_container from '../containers/HelpLine_container';

export default class Home extends React.PureComponent {

    render() {
        return (
            <React.Fragment>
                <HelpLine_container/>
                <div className="container">
                    <MovieList_container/>
                </div>
            </React.Fragment>
        )
    }
}