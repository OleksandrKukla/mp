import movies from './movies';

import {
    SET_FULL_LIST_ACTION,
    SET_SORTING_TYPE_ACTION,
    SORTING_BY_DATE,
    SORTING_BY_RATING
} from '../../constants';

import {
    transformMovieData,
    setFullListState,
    setSortingType,
    fetchData,
} from './index';

const movieFullList = [
    {
        id: '123',
        image: 'http://domen.com/some.jpg',
        title: 'Some title',
        year: '1999-03-05',
        category: 'actions',
        rating: 300,
        subtitle: 'actions',
        duration: 120,
        description: 'good movie'
    }
];

describe('Reducer', () => {

    it('SET_FULL_LIST_ACTION', () => {
        const action = {
            movieFullList,
            type: SET_FULL_LIST_ACTION
        };

        const expectedState = {
            sortingType: SORTING_BY_DATE,
            movieList: movieFullList,
            movieFullList
        };

        expect(movies(undefined, action)).toEqual(expectedState);
    });

    it('SET_SORTING_TYPE_ACTION', () => {
        const action = {
            sortingType: SORTING_BY_RATING,
            type: SET_SORTING_TYPE_ACTION
        };

        const expectedState = {
            sortingType: SORTING_BY_RATING,
            movieList: [],
            movieFullList: []
        };

        expect(movies(undefined, action)).toEqual(expectedState);
    });

});