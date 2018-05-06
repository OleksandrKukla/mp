import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {

    it('Renders correctly - all attributes (Snapshot)', () => {
        const tree = renderer
            .create(
                <Button
                    title="My Button"
                    size="small"
                    type="secondary"
                    isActive={true}
                    addClasses="custom-class-1 custom-class-2"
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly - not all attributes (Snapshot)', () => {
        const tree = renderer
            .create(
                <Button
                    title="My Button"
                    type="outline"
                    addClasses="custom-class-1 custom-class-2"
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});

