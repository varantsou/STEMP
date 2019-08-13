import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const baseClassName = 'header';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`
    };
};

const Header = () => {
    const classNames = getClassNames();

    return (
        <header className={classNames.component}>
            <div className={classNames.container}>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/catalog">Catalog</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
