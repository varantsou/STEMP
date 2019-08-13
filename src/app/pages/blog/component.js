import React from 'react';

import './index.scss';

const baseClassName = 'blog-page';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`
    };
};

const Blog = () => {
    const classNames = getClassNames();

    return (
        <div className={classNames.component}>
            <div className={classNames.container}>
                Blog page
            </div>
        </div>
    );
};

export default Blog;
