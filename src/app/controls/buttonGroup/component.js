import React from 'react';

import './index.scss';

const baseClassName = 'button-group';
const getClassNames = () => {
    return {
        component: baseClassName
    };
};

const ButtonGroup = (props) => {
    const classNames = getClassNames(props);

    const render = () => {
        return (
            <div className={classNames.component}>
                {props.children}
            </div>
        );
    };

    return render();
};

export default ButtonGroup;
