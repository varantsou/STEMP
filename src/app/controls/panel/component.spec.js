import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Panel from './component';

const props = {
    className: 'test-class',
    title: 'Test title',
    buttonText: 'Edit',
    onClick: jest.fn()
};

describe('Should render Panel component', () => {
    test('with properties', () => {
        const component = shallow(<Panel {...props} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('without properties', () => {
        const component = shallow(<Panel />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });
});

describe('Panel component', () => {
    describe('Should implement "handleButtonClick" method', () => {
        test('with "onClick" property', () => {
            const component = shallow(<Panel {...props} />);
            const instance = component.instance();

            jest.spyOn(instance.props, 'onClick')
                .mockImplementation(() => {});

            instance.handleButtonClick();

            expect(instance.props.onClick).toBeCalled();
        });

        test('without "handleButtonClick" property', () => {
            const component = shallow(<Panel />);
            const instance = component.instance();

            expect(() => {
                instance.handleButtonClick();
            }).not.toThrow();
        });
    });
});
