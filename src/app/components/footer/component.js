import React from 'react';

import './index.scss';

const baseClassName = 'footer';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`
    };
};

const Footer = () => {
    const classNames = getClassNames();

    return (
        <footer className={classNames.component}>
            <div className={classNames.container}>
                footer
            </div>
        </footer>
    );
};

export default Footer;
