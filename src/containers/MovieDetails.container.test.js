import {shallow} from 'enzyme';
import React from 'react';
import MovieDetails from './MovieDetails.container';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('MovieDetails Container', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({
            movies: {
                movieFullList: []
            }
        });

        wrapper = shallow(<MovieDetails store={store}/>);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            movieList: expect.any(Object)
        }));
    });
});