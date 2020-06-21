import React from 'react';

import MainBanner from 'app/components/main-banner';

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
            <MainBanner/>
        </div>
    );
};

export default Home;
