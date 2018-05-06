import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';


import App from './App.js';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Header from './Header';
import Footer from './Footer';

describe('App routers. Page components.', () => {
    it('navigate to "Home" page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        );

        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(Details)).toHaveLength(0);
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('navigate to "Details" page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/details/1']}>
                <App/>
            </MemoryRouter>
        );

        expect(wrapper.find(Details)).toHaveLength(1);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    it('Renders correctly (Snapshot)', () => {
        const tree1 = renderer
                .create(
                    <MemoryRouter initialEntries={['/details/1']}>
                        <App/>
                    </MemoryRouter>
                )
                .toJSON(),
            tree2 = renderer
                .create(
                    <MemoryRouter initialEntries={['/']}>
                        <App/>
                    </MemoryRouter>
                );

        expect(tree1).toMatchSnapshot();
        expect(tree2).toMatchSnapshot();
    });
});