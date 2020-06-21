import React from 'react';

import './index.scss';

const baseClassName = 'catalog-page';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`
    };
};

const Catalog = () => {
    const classNames = getClassNames();

    return (
        <div className={classNames.component}>
            <div className={classNames.container}>
                Services page
            </div>
        </div>
    );
};

export default Catalog;
