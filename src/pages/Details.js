import React from 'react';

import HelpLine from '../components/HelpLine';
import MovieList from '../components/MovieList';

import mockObject from '../MockFilmList';

export default class Details extends React.PureComponent {
    constructor(props) {
        super(props);

        this.updateCurrentMovie();
    }

    updateCurrentMovie () {
        this.currentMovie = mockObject.find((el) => (
            String(el.id) === this.props.match.params.movieID
        ));

        console.log(this.currentMovie);
    }

    render() {
        return (
            <React.Fragment>
                <React.Fragment>
                    <If true={!this.props.match.params.movieID}>
                        <HelpLine movieList={mockObject}/>
                    </If>
                    <If true={this.props.match.params.movieID}>
                        <HelpLine category={this.currentMovie.category}/>
                    </If>
                    <div className="container">
                        <MovieList movieList={mockObject}/>
                    </div>
                </React.Fragment>
            </React.Fragment>
        )
    }
}