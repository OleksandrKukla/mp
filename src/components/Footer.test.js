import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer', () => {

    it('Renders correctly (Snapshot)', () => {
        const tree = renderer
            .create(
                <Footer>
                    <div>test</div>
                </Footer>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});

