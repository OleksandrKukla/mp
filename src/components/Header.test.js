import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Header from './Header';
import MovieDetails from './MovieDetails';
import Search from './Search';
import {SORTING_BY_RATING} from "../constants";

const mockStore = configureStore();

describe('Header', () => {

    let store = mockStore({
        movies: {
            sortingType: SORTING_BY_RATING,
            movieList: [],
            movieFullList: []
        }
    });

    it('Contain correct components', () => {
        const wrapperDetails = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/details/1']}>
                    <Header/>
                </MemoryRouter>
            </Provider>
            ),
            wrapperHome = mount(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/']}>
                        <Header/>
                    </MemoryRouter>
                </Provider>
            );

        expect(wrapperDetails.find(MovieDetails)).toHaveLength(1);
        expect(wrapperDetails.find(Search)).toHaveLength(0);

        expect(wrapperHome.find(MovieDetails)).toHaveLength(0);
        expect(wrapperHome.find(Search)).toHaveLength(1);
    });

    it('Renders correctly (Snapshot)', () => {
        const tree1 = renderer
                .create(
                    <Provider store={store}>
                        <MemoryRouter initialEntries={['/details/1']}>
                            <Header>
                                <div>test</div>
                            </Header>
                        </MemoryRouter>
                    </Provider>
                )
                .toJSON(),
            tree2 = renderer
                .create(
                    <Provider store={store}>
                        <MemoryRouter initialEntries={['/']}>
                            <Header>
                                <div>test</div>
                            </Header>
                        </MemoryRouter>
                    </Provider>
                );

        expect(tree1).toMatchSnapshot();
        expect(tree2).toMatchSnapshot();
    });
});

