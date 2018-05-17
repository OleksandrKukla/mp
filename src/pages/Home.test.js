import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {SORTING_BY_RATING} from '../constants';
import {Provider} from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Home page component', () => {
    let store = mockStore({
        movies: {
            sortingType: SORTING_BY_RATING,
            movieList: [],
            movieFullList: []
        }
    });

    it('Renders correctly (Snapshot)', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <Home/>
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
