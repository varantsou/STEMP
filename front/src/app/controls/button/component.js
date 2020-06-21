import React from 'react';
import PropTypes from 'prop-types';

import utils from 'app/common/utils';

import './index.scss';

const baseClassName = 'button';
const getClassNames = (props) => {
    const { disabled, theme } = props;

    const componentClassName = utils.getClassName(
        baseClassName,
        [`${baseClassName}--disabled`, disabled],
        [`${baseClassName}--${theme}`, theme]
    );

    return {
        component: componentClassName
    };
};

const Button = (props) => {
    const { disabled, onClick } = props;

    const classNames = getClassNames(props);

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const render = () => {
        return (
            <button
                className={classNames.component}
                disabled={disabled}
                aria-disabled={disabled}
                onClick={handleClick}
            >
                {props.children}
            </button>
        );
    };

    return render();
};

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;
