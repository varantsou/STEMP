import React from 'react';
import CreateOrder from 'app/components/create-order';

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
                <CreateOrder/>
            </div>
        </div>
    );
};

export default Home;
