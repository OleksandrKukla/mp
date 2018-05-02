import React from 'react';

import HelpLine from '../components/HelpLine';
import MovieList from '../components/MovieList';

import mockObject from '../MockFilmList';

export default class Details extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: null
        };

    }

    static getDerivedStateFromProps (nextProps) {
        return {
            currentMovie: mockObject.find((el) => String(el.id) === nextProps.match.params.movieID)
        }
    }

    render() {
        return (
            <React.Fragment>
                <If true={!this.props.match.params.movieID}>
                    <HelpLine movieList={mockObject}/>
                </If>
                <If true={this.props.match.params.movieID}>
                    <HelpLine category={this.state.currentMovie.category}/>
                </If>
                <div className="container">
                    <MovieList movieList={mockObject}/>
                </div>
            </React.Fragment>
        )
    }
}