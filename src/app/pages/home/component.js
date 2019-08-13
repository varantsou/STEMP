import React from 'react';

import './index.scss';

const baseClassName = 'home';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`
    };
};

const Home = () => {
    const classNames = getClassNames();

    return (
        <div className={classNames.component}>
            <div className={classNames.container}>
                Home page
            </div>
        </div>
    );
};

export default Home;
