import React from 'react';

import MovieListItem from './MovieListItem';

import {SORTING_BY_RATING, SORTING_BY_DATE} from "../constants";

export default class MovieList extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            cachedProps: null,
            isEmpty: !(this.props.movieList && this.props.movieList.length),
            movieList: []
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.cachedProps === nextProps) {
            return null;
        }

        return {
            cachedProps: nextProps,
            movieList: MovieList.sortList(nextProps.sortingType, nextProps.movieList),
            isEmpty: !(
                nextProps.movieList && nextProps.movieList.length
            )
        };
    }

    static compareDates = (movie_1, movie_2) => {
        const date_1 = String(movie_1.year).split('-').join('');
        const date_2 = String(movie_2.year).split('-').join('');

        return Number(date_2) - Number(date_1);
    };

    static compareRating = (movie_1, movie_2) => (
        Number(movie_2.rating) - Number(movie_1.rating)
    );

    static sortList(sortingType, list) {
        list = [...list];

        switch (sortingType) {

            case SORTING_BY_RATING:
                return list.sort(MovieList.compareRating);

            case SORTING_BY_DATE:
            default:
                return list.sort(MovieList.compareDates);
        }
    }

    render() {
        return (
            <div className="row pt-3 pb-3">
                <If false={this.state.isEmpty}>
                    <For each="item" counter="rowIndex" in={this.state.movieList}>
                        <div className="col-3 mt-3 mb-3" key={'movie-list-item-' + rowIndex}>
                            <MovieListItem
                                image={item.image}
                                title={item.title}
                                year={item.year}
                                category={item.category}
                                filmURL={'/details/' + item.id}
                                yearSearchURL="#"
                                categorySearchUrl="#"
                            />
                        </div>
                    </For>
                </If>
                <If true={this.state.isEmpty}>
                    <div className="col alert alert-primary text-center" role="alert">
                        No films found
                    </div>
                </If>
            </div>
        );
    }
}