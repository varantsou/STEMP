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
                Catalog page

                <ul>
                    <li>1. Маршрут</li>
                    <li>2. Почасовая оплата</li>
                    <li>3. Мало- и средне-габаритная грузоперевозка</li>
                </ul>
            </div>
        </div>
    );
};

export default Catalog;
