import React from 'react';

import MovieList from '../containers/MovieList.container';
import HelpLine from '../containers/HelpLine.container';

export default class Details extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: null
        };

    }

    static getDerivedStateFromProps (nextProps) {
        return {
            currentMovie: nextProps.movieList.find(
                (el) => String(el.id) === nextProps.match.params.movieID
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <If true={!this.props.match.params.movieID}>
                    <HelpLine />
                </If>
                <If true={this.props.match.params.movieID}>
                    <HelpLine category={this.state.currentMovie && this.state.currentMovie.category}/>
                </If>
                <div className="container">
                    <MovieList/>
                </div>
            </React.Fragment>
        )
    }
}