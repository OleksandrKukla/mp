import {shallow} from 'enzyme';
import React from 'react';
import HelpLine from './HelpLine.container';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('HelpLine Container', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({
            movies: {
                movieList: []
            }
        });

        wrapper = shallow(<HelpLine store={store}/>);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            movieList: expect.any(Object)
        }));
    });
});