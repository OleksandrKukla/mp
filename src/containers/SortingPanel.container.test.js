import {shallow} from 'enzyme';
import React from 'react';
import SortingPanel from './SortingPanel.container';
import configureStore from 'redux-mock-store';
import {SORTING_BY_RATING} from "../constants";

const mockStore = configureStore();

describe('SortingPanel Container', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({
            movies: {
                movieList: [],
                sortingType: SORTING_BY_RATING
            }
        });
        store.dispatch = jest.fn();
        wrapper = shallow(<SortingPanel store={store}/>);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            store: store,
            dispatch: expect.any(Function)
        }));
    });
});