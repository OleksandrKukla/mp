import React from 'react';

import HelpLine from '../components/HelpLine';

import MovieList_container from '../containers/MovieList_container';
import HelpLine_container from '../containers/HelpLine_container';

export default class Details extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: null
        };

    }

    static getDerivedStateFromProps (nextProps) {
        return {
            currentMovie: nextProps.movieList.find((el) => String(el.id) === nextProps.match.params.movieID)
        }
    }

    render() {
        return (
            <React.Fragment>
                <If true={!this.props.match.params.movieID}>
                    <HelpLine_container />
                </If>
                <If true={this.props.match.params.movieID}>
                    <HelpLine category={this.state.currentMovie.category}/>
                </If>
                <div className="container">
                    <MovieList_container/>
                </div>
            </React.Fragment>
        )
    }
}