import React, { useState } from 'react';
import PropTypes from 'prop-types';

import utils from 'app/common/utils';

import './index.scss';

import iconCheckButtonOn from './icons/check.svg';

const baseClassName = 'checkbox';
const getClassNames = (props) => {
    const { className, disabled, checked } = props;

    const componentClassName = utils.getClassName(
        baseClassName,
        className,
        [`${baseClassName}--checked`, checked],
        [`${baseClassName}--disabled`, disabled]
    );

    return {
        component: componentClassName,
        value: `${baseClassName}__value`,
        valueIcon: `${baseClassName}__value-icon`,
        input: `${baseClassName}__input`
    };
};

const Checkbox = (props) => {
    const {
        selected,
        disabled,
        onChange
    } = props;

    const [checked, toggleChecked] = useState(!!selected);

    const classNames = getClassNames(props);

    const handleClick = () => {
        toggleChecked(!checked);

        if (onChange) {
            onChange();
        }
    };

    const handleKeyDown = (event) => {
        const keyCode = event.keyCode;

        if (keyCode === 13) {
            toggleChecked(!checked);
        }
    };

    const renderValue = () => {
        let output;

        if (!checked) {
            output = (
                <img className={classNames.valueIcon} width="12" src={iconCheckButtonOn} alt="" />
            );
        }

        return output;
    };

    const render = () => {
        const valueOutput = renderValue();

        const output = (
            <div className={classNames.component}
                tabIndex="0"
                role="checkbox"
                aria-checked={checked}
                aria-disabled={disabled}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                // onBlur={handleBlur}
            >
                <div className={classNames.value}>
                    {valueOutput}
                </div>
                {props.children}
            </div>
        );

        return output;
    };

    return render();
};

Checkbox.propTypes = {

};

export default Checkbox;
