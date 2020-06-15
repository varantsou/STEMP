import React from 'react';

import MenuIcon from './icons/logo';

import './index.scss';

const baseClassName = 'logo';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`
    };
};

const Logo = () => {
    const classNames = getClassNames();

    return (
        <div className={classNames.component} >
            <MenuIcon/>
        </div>
    );
};

export default Logo;
