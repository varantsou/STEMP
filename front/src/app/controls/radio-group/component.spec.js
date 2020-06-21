import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import RadioGroup from './component';
import RadioGroupOption from './radio-group-option/component';

const propsWithClassName = {
    className: 'test-class'
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
    ...propsWithDisabled,
    ...propsWithValidate,
    ...propsWithOnChanged
};

describe('Should render RadioGroup component', () => {
    test('with default properties', () => {
        const component = shallow(<RadioGroup {...propsDefault} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('with required properties', () => {
        const component = shallow(<RadioGroup {...propsRequired} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('with "className" property', () => {
        const component = shallow(<RadioGroup {...propsWithClassName} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('with "disabled" property', () => {
        const component = shallow(<RadioGroup {...propsWithDisabled} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });

    test('with "validate" property', () => {
        const component = shallow(<RadioGroup {...propsWithValidate} />);
        const output = shallowToJson(component);

        expect(output).toMatchSnapshot();
    });
});

describe('RadioGroup component', () => {
    describe('Should implement "handleCheckedChange" method', () => {
        const checkedIndex = 1;

        test('with "onChanged" property', () => {
            const component = shallow(
                <RadioGroup {...propsWithOnChanged}>
                    <RadioGroupOption value="value1">Option 1</RadioGroupOption>
                    <RadioGroupOption value="value2">Option 2</RadioGroupOption>
                </RadioGroup>
            );
            const instance = component.instance();

            jest.spyOn(instance, 'setState')
                .mockImplementation(() => {});

            jest.spyOn(instance.props, 'onChanged')
                .mockImplementation(() => {});

            instance.handleCheckedChange(checkedIndex);

            expect(instance.setState).toBeCalledWith({ checkedIndex: checkedIndex });
            expect(instance.props.onChanged).toBeCalledWith('value2', checkedIndex);
        });

        test('without "onChanged" property', () => {
            const component = shallow(<RadioGroup {...propsRequired} />);
            const instance = component.instance();

            jest.spyOn(instance, 'setState')
                .mockImplementation(() => {});

            instance.handleCheckedChange(checkedIndex);

            expect(instance.setState).toBeCalledWith({ checkedIndex: checkedIndex });
        });
    });

    describe('Should implement "getCheckedIndex" method', () => {
        test('without props.children property', () => {
            const component = shallow(
                <RadioGroup />
            );
            const instance = component.instance();

            const checkedIndex = instance.getCheckedIndex();

            expect(checkedIndex).toBe(-1);
        });

        test('with various props.children property', () => {
            const component = shallow(
                <RadioGroup>
                    <div>Any element</div>
                    <RadioGroupOption checked={true}>Option 1</RadioGroupOption>
                    <RadioGroupOption>Option 2</RadioGroupOption>
                </RadioGroup>
            );
            const instance = component.instance();

            const checkedIndex = instance.getCheckedIndex();

            expect(checkedIndex).toBe(1);
        });

        test('with RadioGroupOption(s) props.children property', () => {
            const component = shallow(
                <RadioGroup>
                    <RadioGroupOption>Option 1</RadioGroupOption>
                    <RadioGroupOption checked={true}>Option 2</RadioGroupOption>
                </RadioGroup>
            );
            const instance = component.instance();

            const checkedIndex = instance.getCheckedIndex();

            expect(checkedIndex).toBe(1);
        });
    });
    describe('Should implement "componentDidUpdate" method', () => {
        test('with change " checkedValue" property', () => {
            const checkedValue = 'value2';
            const testProps = {
                checkedValue
            };
            const component = shallow(
                <RadioGroup {...testProps}>
                    <RadioGroupOption value="value1">Option 1</RadioGroupOption>
                    <RadioGroupOption value="value2">Option 2</RadioGroupOption>
                </RadioGroup>
            );
            const instance = component.instance();
            const oldCheckedValue = 'value1';
            const prevProps = {
                checkedValue: oldCheckedValue
            };

            jest.spyOn(instance, 'setState')
                .mockImplementation(() => {});

            instance.componentDidUpdate(prevProps);

            expect(instance.setState).toBeCalled();
        });

        test('with clear "checkedValue" property', () => {
            let checkedValue;
            const testProps = {
                checkedValue
            };
            const component = shallow(
                <RadioGroup {...testProps}>
                    <RadioGroupOption value="value1">Option 1</RadioGroupOption>
                    <RadioGroupOption value="value2">Option 2</RadioGroupOption>
                </RadioGroup>
            );
            const instance = component.instance();
            const oldCheckedValue = 'value2';
            const prevProps = {
                checkedValue: oldCheckedValue
            };

            jest.spyOn(instance, 'setState')
                .mockImplementation(() => {});

            instance.componentDidUpdate(prevProps);

            expect(instance.setState).toBeCalledWith({ checkedIndex: -1 });
        });

        test('without change "checkedValue" property', () => {
            const checkedValue = 'value2';
            const testProps = {
                checkedValue
            };
            const component = shallow(
                <RadioGroup {...testProps}>
                    <RadioGroupOption value="value1">Option 1</RadioGroupOption>
                    <RadioGroupOption value="value2">Option 2</RadioGroupOption>
                </RadioGroup>
            );
            const instance = component.instance();
            const oldCheckedValue = 'value2';
            const prevProps = {
                checkedValue: oldCheckedValue
            };

            jest.spyOn(instance, 'setState')
                .mockImplementation(() => {});

            instance.componentDidUpdate(prevProps);

            expect(instance.setState).not.toBeCalled();
        });
    });
});
