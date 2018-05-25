import {shallow} from 'enzyme';
import React from 'react';
import Details from './Details.container';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Details Container', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({
            movies: {
                movieFullList: []
            }
        });

        wrapper = shallow(<Details store={store}/>);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            movieList: expect.any(Object)
        }));
    });
});