import React from 'react';

import './index.scss';

const baseClassName = 'main-banner';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`,
        banner: `${baseClassName}__banner`
    };
};

const MainBanner = () => {
    const classNames = getClassNames();

    return (
        <div className={classNames.component}>
            <div className={classNames.banner}>
                Main banner
            </div>
        </div>
    );
};

export default MainBanner;
