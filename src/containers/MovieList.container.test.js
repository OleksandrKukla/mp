import {shallow} from 'enzyme';
import React from 'react';
import MovieList from './MovieList.container';
import configureStore from 'redux-mock-store';
import {SORTING_BY_RATING} from '../constants';

const mockStore = configureStore();

describe('MovieList Container', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({
            movies: {
                movieList: [],
                sortingType: SORTING_BY_RATING
            }
        });

        wrapper = shallow(<MovieList store={store}/>);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            movieList: expect.any(Object),
            sortingType: SORTING_BY_RATING
        }));
    });
});