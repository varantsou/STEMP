import React from 'react';
import PropTypes from 'prop-types';

import utils from 'app/common/utils';

import './index.scss';

const baseClassName = 'input';
const getClassNames = (props) => {
    const { className, disabled, title } = props;

    const componentClassName = utils.getClassName(
        baseClassName,
        className,
        [`${baseClassName}--no-title`, !title],
        [`${baseClassName}--disabled`, disabled]
    );

    return {
        component: componentClassName,
        title: `${baseClassName}__title`,
        input: `${baseClassName}__input`
    };
};

const Input = (props) => {
    const {
        disabled,
        placeholder,
        multiline,
        type,
        maxLength
    } = props;

    const classNames = getClassNames(props);

    const renderLabel = () => {
        let output;

        if (props.children) {
            output = (
                <label className={classNames.title}>{props.children}</label>
            );
        }

        return output;
    };

    const labelOutput = renderLabel();

    const render = () => {
        let output;

        if (multiline) {
            output = (
                <textarea
                    className={classNames.component}
                    disabled={disabled}
                    placeholder={placeholder}
                    maxLength={maxLength}
                />
            );
        } else {
            output = (
                <div>
                    {labelOutput}
                    <input
                        className={classNames.component}
                        disabled={disabled}
                        type={type}
                        placeholder={placeholder}
                        maxLength={maxLength}
                    />
                </div>
            );
        }

        return output;
    };

    return render();
};

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    validate: PropTypes.bool,
    onChanged: PropTypes.func,
    onFocused: PropTypes.func,
    onLostFocus: PropTypes.func,
    onKeyPress: PropTypes.func,
    multiline: PropTypes.bool,
    maxLength: PropTypes.number
};

export default Input;
