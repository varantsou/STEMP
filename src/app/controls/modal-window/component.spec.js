import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ModalWindow from './component';

const propsWithClassName = {
    className: 'test-class'
};

const propsWithHasCloseButton = {
    hasCloseButton: false
};

const propsWithTitle = {
    title: 'test title'
};

const propsWithOnClose = {
    onClose: jest.fn()
};

const propsRequired = {
};

const propsDefault = {
    ...propsRequired,
    ...propsWithClassName,
    ...propsWithHasCloseButton,
    ...propsWithTitle,
    ...propsWithOnClose
};

describe('ModalWindow component', () => {
    beforeEach(() => {
        jest.spyOn(ModalWindow.prototype, 'componentDidMount')
            .mockImplementation(() => {});
    });

    describe('Should match snapshots', () => {
        test('with default properties', () => {
            const component = shallow(<ModalWindow {...propsDefault} />);
            const output = shallowToJson(component);

            expect(output).toMatchSnapshot();
        });

        test('with required properties', () => {
            const component = shallow(<ModalWindow {...propsRequired} />);
            const output = shallowToJson(component);

            expect(output).toMatchSnapshot();
        });

        test('with "className" property', () => {
            const component = shallow(<ModalWindow {...propsWithClassName} />);
            const output = shallowToJson(component);

            expect(output).toMatchSnapshot();
        });

        test('with "hasCloseButton" property', () => {
            const component = shallow(<ModalWindow {...propsWithHasCloseButton} />);
            const output = shallowToJson(component);

            expect(output).toMatchSnapshot();
        });

        test('with "title" property', () => {
            const component = shallow(<ModalWindow {...propsWithTitle} />);
            const output = shallowToJson(component);

            expect(output).toMatchSnapshot();
        });
    });

    describe('Should implement methods', () => {
        describe('Should implement "handleCloseClick" method', () => {
            test('with "onClose" property', () => {
                const component = shallow(<ModalWindow {...propsWithOnClose} />);
                const instance = component.instance();

                jest.spyOn(instance.props, 'onClose')
                    .mockImplementation(() => {});

                instance.handleCloseClick();

                expect(instance.props.onClose).toBeCalled();
            });

            test('without "onClose" property', () => {
                const component = shallow(<ModalWindow {...propsRequired} />);
                const instance = component.instance();

                instance.handleCloseClick();
            });
        });

        describe('Should implement "handleKeyDown" method', () => {
            describe('with "onClose" property', () => {
                let component;
                let instance;

                beforeEach(() => {
                    component = shallow(<ModalWindow {...propsWithOnClose} />);
                    instance = component.instance();

                    jest.spyOn(instance.props, 'onClose')
                        .mockImplementation(() => {});
                });

                test('if event.keyCode is equal to 27', () => {
                    const event = {
                        keyCode: 27
                    };

                    instance.handleKeyDown(event);

                    expect(instance.props.onClose).toBeCalled();
                });

                test('if event.keyCode is NOT equal to 27', () => {
                    const event = {
                        keyCode: 26
                    };

                    instance.handleKeyDown(event);

                    expect(instance.props.onClose).not.toBeCalled();
                });
            });

            test('without "onClose" property', () => {
                const component = shallow(<ModalWindow {...propsRequired} />);
                const instance = component.instance();

                const event = {
                    keyCode: 27
                };

                instance.handleKeyDown(event);
            });
        });

        describe('Should implement "handleOutputClick" method', () => {
            const event = {
                target: {}
            };

            describe('with "onClose" property', () => {
                let component;
                let instance;

                beforeEach(() => {
                    component = shallow(<ModalWindow {...propsWithOnClose} />);
                    instance = component.instance();

                    jest.spyOn(instance.props, 'onClose')
                        .mockImplementation(() => {});

                    instance.modalRef = {
                        current: {
                            contains: jest.fn()
                        }
                    };
                });

                test('when instance.modalRef.current.contains returns false', () => {
                    instance.modalRef.current.contains.mockImplementation(() => {
                        return false;
                    });

                    instance.handleOutputClick(event);

                    expect(instance.props.onClose).toBeCalled();
                });

                test('when instance.modalRef.current.contains returns true', () => {
                    instance.modalRef.current.contains.mockImplementation(() => {
                        return true;
                    });

                    instance.handleOutputClick(event);

                    expect(instance.props.onClose).not.toBeCalled();
                });
            });

            test('without "onClose" property', () => {
                const component = shallow(<ModalWindow {...propsRequired} />);
                const instance = component.instance();

                instance.modalRef = {
                    current: {
                        contains: jest.fn().mockImplementation(() => {
                            return false;
                        })
                    }
                };

                instance.handleOutputClick(event);
            });
        });

        test('should implement "componentDidMount" method', () => {
            const component = shallow(<ModalWindow {...propsRequired} />);
            const instance = component.instance();

            instance.modalRef = {
                current: {
                    focus: jest.fn().mockImplementation(() => {
                        return false;
                    })
                }
            };

            instance.componentDidMount.mockRestore();
            instance.componentDidMount();

            expect(instance.modalRef.current.focus).toBeCalled();
        });
    });
});
