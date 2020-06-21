import React from 'react';
import utils from 'app/common/utils';

import './index.scss';

const baseClassName = 'dropdown';
const getClassNames = (props) => {
    const { disabled, theme } = props;

    const componentClassName = utils.getClassName(
        baseClassName,
        [`${baseClassName}--disabled`, disabled],
        [`${baseClassName}--${theme}`, theme]
    );

    return {
        component: componentClassName,
        select: `${baseClassName}__select`,
        title: `${baseClassName}__title`
    };
};

const Dropdown = (props) => {
    const { disabled, options } = props;

    const classNames = getClassNames(props);

    const renderOptions = () => {
        return options.map((item, index) => {
            return (
                <option key={index}>{item}</option>
            );
        });
    };

    const render = () => {
        const optionsOutput = renderOptions();

        return (
            <div className={classNames.component}>
                <div className={classNames.title}>{props.children}</div>
                <select
                    className={classNames.select}
                    disabled={disabled}
                >
                    {optionsOutput}
                </select>
            </div>
        );
    };

    return render();
};

export default Dropdown;
