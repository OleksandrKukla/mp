import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import renderer from 'react-test-renderer';

import Header from './Header';
import MovieDetails from './MovieDetails';
import Search from './Search';

describe('Header', () => {

    it('Contain correct components', () => {
        const wrapperDetails = mount(
            <MemoryRouter initialEntries={['/details/1']}>
                <Header/>
            </MemoryRouter>
            ),
            wrapperHome = mount(
                <MemoryRouter initialEntries={['/']}>
                    <Header/>
                </MemoryRouter>
            );

        expect(wrapperDetails.find(MovieDetails)).toHaveLength(1);
        expect(wrapperDetails.find(Search)).toHaveLength(0);

        expect(wrapperHome.find(MovieDetails)).toHaveLength(0);
        expect(wrapperHome.find(Search)).toHaveLength(1);
    });

    it('Renders correctly (Snapshot)', () => {
        const tree1 = renderer
                .create(
                    <MemoryRouter initialEntries={['/details/1']}>
                        <Header>
                            <div>test</div>
                        </Header>
                    </MemoryRouter>
                )
                .toJSON(),
            tree2 = renderer
                .create(
                    <MemoryRouter initialEntries={['/']}>
                        <Header>
                            <div>test</div>
                        </Header>
                    </MemoryRouter>
                );

        expect(tree1).toMatchSnapshot();
        expect(tree2).toMatchSnapshot();
    });
});

