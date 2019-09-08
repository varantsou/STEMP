import React from 'react';

import HyperLink from 'app/controls/hyper-link';

import LogoIcon from './icons/logo';

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

    // console.log(logoIcon);

    return (
        <div className={classNames.component}>
            <HyperLink to="/">
                <LogoIcon/>
                PERSONAL<br/>DRIVER
            </HyperLink>
        </div>
    );
};

export default Logo;
