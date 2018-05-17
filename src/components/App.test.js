import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SORTING_BY_RATING} from "../constants";
import thunk from "redux-thunk";

import App from './App.js';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Header from './Header';
import Footer from './Footer';

const middleWares = [thunk];
const mockStore = configureStore(middleWares);

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({}));

describe('App routers. Page components.', () => {
    let store = mockStore({
        movies: {
            sortingType: SORTING_BY_RATING,
            movieList: [],
            movieFullList: []
        }
    });

    it('navigate to "Home" page', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <App/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(Details)).toHaveLength(0);
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('navigate to "Details" page', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/details/1']}>
                    <App/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find(Details)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('Renders correctly (Snapshot)', () => {
        const tree1 = renderer
                .create(
                    <Provider store={store}>
                        <MemoryRouter initialEntries={['/details/1']}>
                            <App/>
                        </MemoryRouter>
                    </Provider>
                )
                .toJSON(),
            tree2 = renderer
                .create(
                    <Provider store={store}>
                        <MemoryRouter initialEntries={['/']}>
                            <App/>
                        </MemoryRouter>
                    </Provider>
                );

        expect(tree1).toMatchSnapshot();
        expect(tree2).toMatchSnapshot();
    });
});