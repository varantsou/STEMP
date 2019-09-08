import React from 'react';
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
    const { disabled } = props;

    const classNames = getClassNames(props);

    const render = () => {
        return (
            <button
                className={classNames.component}
                disabled={disabled}
                aria-disabled={disabled}
            >
                {props.children}
            </button>
        );
    };

    return render();
};

export default Button;
