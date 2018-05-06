import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import ErrorBoundary from './ErrorBoundary';

const ThrowError = () => {
    throw new Error('test mock Error')
};

describe('Error boundary', () => {
    it('Catches error', () => {
        const spy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
        const throwError = () => {
            mount(
                <ErrorBoundary>
                    <ThrowError/>
                </ErrorBoundary>
            )
        };

        const wrapper = mount(
            <ErrorBoundary>
                <ThrowError/>
            </ErrorBoundary>
        );

        expect(throwError).not.toThrow('test mock Error');
        expect(spy).toHaveBeenCalled();
        expect(wrapper.find('h2').text()).toEqual('Something went wrong.');
        expect(wrapper.find('details').text()).toMatch(/.+\s.+/);
        expect(wrapper.state().error).not.toBeFalsy();
        expect(wrapper.state().errorInfo).not.toBeFalsy();

        spy.mockReset();
        spy.mockRestore();
    });

    it('Print children', () => {
        const message = <div>111</div>,
            results = mount(
                <ErrorBoundary>
                    {message}
                </ErrorBoundary>
            ).html(),
            expected = mount(message).html();

        expect(results).toEqual(expected);
    });

    it('Renders correctly (Snapshot)', () => {
        const tree = renderer
            .create(
                <ErrorBoundary>
                    <div>test</div>
                </ErrorBoundary>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});