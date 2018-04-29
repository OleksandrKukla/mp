import React from 'react';

import HelpLine from './HelpLine';
import MovieList from './MovieList';

import mockObject from '../MockFilmList';

export default class ContentWrapper extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <HelpLine movieList={mockObject}/>
                <div className="container">
                    <MovieList movieList={mockObject}/>
                </div>
            </React.Fragment>
        )
    }
}