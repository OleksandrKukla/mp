import React from 'react';
import {MemoryRouter} from 'react-router';
import Details from './Details';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {SORTING_BY_RATING} from '../constants';
import {Provider} from 'react-redux';

const middleWares = [thunk];
const mockStore = configureStore(middleWares);

describe('Details page component', () => {
    const list = [
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

    let store = mockStore({
        movies: {
            sortingType: SORTING_BY_RATING,
            movieList: list,
            movieFullList: list
        }
    });

    it('Renders correctly (Snapshot)', () => {
        const tree1 = renderer
            .create(
                <Provider store={store}>
                    <MemoryRouter>
                        <Details required={true} movieList={list} match={{params: {movieID: '123'}}}/>
                    </MemoryRouter>
                </Provider>
            )
            .toJSON();

        expect(tree1).toMatchSnapshot();
    });
});
