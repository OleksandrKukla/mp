import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import BackgroundContainer from './BackgroundContainer';

describe('Background Container', () => {

    it('Set correct styles', () => {
        const imgSrc = 'background.jpg',
            filter = 'rgba(0, 0, 0, 0.3)',
            mountedHTML = mount(
                <BackgroundContainer
                    img={imgSrc}
                    filter={filter}
                />
            ).html();

        expect(mountedHTML).toEqual(
            expect.stringContaining(`background-image: url(${imgSrc})`)
        );

        expect(mountedHTML).toEqual(
            expect.stringContaining(`background-color: ${filter}`)
        );
    });

    it('Print children', () => {
        const message = <div>111</div>,
            results = mount(
                <BackgroundContainer>
                    {message}
                </BackgroundContainer>
            ).children().children().children().html(),
            expected = mount(message).html();

        expect(results).toEqual(expected);
    });

    it('Renders correctly (Snapshot)', () => {
        const tree = renderer
            .create(
                <BackgroundContainer
                    img="background.jpg"
                    filter="rgba(0, 0, 0, 0.3)"
                >
                    <div>test</div>
                </BackgroundContainer>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});