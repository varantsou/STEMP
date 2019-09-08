import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Checkbox from './component';

const propsWithClassName = {
    className: 'test-class'
};

const propsWithChecked = {
    checked: true
};

const propsWithDisabled = {
    disabled: true
};

const propsWithValidate = {
    validate: true
};

const propsWithOnChanged = {
    onChanged: jest.fn()
};

const propsRequired = {
};

const propsDefault = {
    ...propsRequired,
    ...propsWithClassName,
    ...propsWithChecked,
    ...propsWithDisabled,
    ...propsWithValidate,
    ...propsWithOnChanged
};

describe('Should render Checkbox component', () => {
    test('with default properties', () => {
        const component = shallow(<Checkbox {...propsDefault} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('with required properties', () => {
        const component = shallow(<Checkbox {...propsRequired} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('with "className" property', () => {
        const component = shallow(<Checkbox {...propsWithClassName} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('with "checked" property', () => {
        const component = shallow(<Checkbox {...propsWithChecked} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('with "disabled" property', () => {
        const component = shallow(<Checkbox {...propsWithDisabled} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('with "validate" property', () => {
        const component = shallow(<Checkbox {...propsWithValidate} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });
});

describe('Checkbox component', () => {
    test('should implement "renderValue" method when state.checked is true', () => {
        const component = shallow(<Checkbox {...propsRequired} />);
        const instance = component.instance();

        instance.state = {
            checked: true
        };

        const classNames = {
            value: 'test-value',
            valueIcon: 'test-value-icons'
        };

        const output = instance.renderValue(classNames);

        expect(output).toMatchSnapshot();
    });

    test('should implement "handleClick" method', () => {
        const component = shallow(<Checkbox {...propsRequired} />);
        const instance = component.instance();

        jest.spyOn(instance, 'toggleChecked')
            .mockImplementation(() => {});

        instance.handleClick();

        expect(instance.toggleChecked).toBeCalled();
    });

    describe('Should implement "handleKeyDown" method', () => {
        const event = {
            preventDefault: jest.fn()
        };

        test('if event.keyCode is equal to 32', () => {
            const component = shallow(<Checkbox {...propsRequired} />);
            const instance = component.instance();

            jest.spyOn(instance, 'toggleChecked')
                .mockImplementation(() => {});

            event.keyCode = 32;

            instance.handleKeyDown(event);

            expect(event.preventDefault).toBeCalled();
            expect(instance.toggleChecked).toBeCalled();
        });

        test('if event.keyCode is NOT equal to 32', () => {
            const component = shallow(<Checkbox {...propsRequired} />);
            const instance = component.instance();

            event.keyCode = 31;

            instance.handleKeyDown(event);
        });
    });

    describe('Should implement "toggleChecked" method', () => {
        test('without "onChanged" property', () => {
            const component = shallow(<Checkbox {...propsRequired} />);
            const instance = component.instance();

            jest.spyOn(instance, 'setState')
                .mockImplementation(() => {});

            instance.state = {
                checked: false
            };

            instance.toggleChecked();

            expect(instance.setState).toBeCalledWith({ checked: true });
        });

        test('with "onChanged" property', () => {
            const component = shallow(<Checkbox {...propsWithOnChanged} />);
            const instance = component.instance();

            jest.spyOn(instance, 'setState')
                .mockImplementation(() => {});

            jest.spyOn(instance.props, 'onChanged')
                .mockImplementation(() => {});

            instance.state = {
                checked: true
            };

            instance.toggleChecked();

            expect(instance.setState).toBeCalledWith({ checked: false });
            expect(instance.props.onChanged).toBeCalledWith(false);
        });
    });

    describe('Should implement "componentDidUpdate" method', () => {
        test('with change "checked" property', () => {
            const checked = true;
            const testProps = {
                checked
            };
            const component = shallow(<Checkbox {...testProps} />);
            const instance = component.instance();
            const oldChecked = false;
            const prevProps = {
                checked: oldChecked
            };

            jest.spyOn(instance, 'setState')
                .mockImplementation(() => {});

            instance.componentDidUpdate(prevProps);

            expect(instance.setState).toBeCalledWith({ checked: checked });
        });

        test('without change "checked" property', () => {
            const checked = true;
            const testProps = {
                checked
            };
            const component = shallow(<Checkbox {...testProps} />);
            const instance = component.instance();
            const oldChecked = true;
            const prevProps = {
                checked: oldChecked
            };

            jest.spyOn(instance, 'setState')
                .mockImplementation(() => {});

            instance.componentDidUpdate(prevProps);

            expect(instance.setState).not.toBeCalled();
        });
    });
});
