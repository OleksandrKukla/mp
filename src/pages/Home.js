import React from 'react';

import HelpLine from '../components/HelpLine';
import MovieList from '../components/MovieList';

import mockObject from '../MockFilmList';

export default class Home extends React.PureComponent {

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