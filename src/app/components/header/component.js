import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header-nav">
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
