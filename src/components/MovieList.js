import React from 'react';

import MovieListItem from './MovieListItem';

export default class MovieList extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isEmpty: !(this.props.movieList && this.props.movieList.length)
        }
    }


    static getDerivedStateFromProps(nextProps) {
        return {
            isEmpty: !(
                nextProps.movieList && nextProps.movieList.length
            )
        }
    }

    render() {
        return (
            <div className="row pt-3 pb-3">
                <If false={this.state.isEmpty}>
                    <For each="item" counter="rowIndex" in={this.props.movieList}>
                        <div className="col-3 mt-3 mb-3" key={'movie-list-item-' + rowIndex}>
                            <MovieListItem
                                image={item.image}
                                title={item.title}
                                year={item.year}
                                category={item.category}
                                filmURL={'/details/' + item.id}
                                yearSearchURL={"#"}
                                categorySearchUrl={"#"}
                            />
                        </div>
                    </For>
                </If>
                <If true={this.isEmpty}>
                    <div className="col alert alert-primary text-center" role="alert">
                        No films found
                    </div>
                </If>
            </div>
        );
    }
}