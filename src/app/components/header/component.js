import React from 'react';

import Logo from 'app/components/logo';
import HyperLink from 'app/controls/hyper-link';

import './index.scss';

import homeIcon from 'app/images/icons/home.svg';

const baseClassName = 'header';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`,
        logo: `${baseClassName}__logo`,
        menu: `${baseClassName}__menu`,
        menuIcon: `${baseClassName}__menu-icon`
    };
};

const Header = () => {
    const classNames = getClassNames();

    return (
        <header className={classNames.component}>
            <div className={classNames.container}>
                <Logo/>
                <nav>
                    <ul className={classNames.menu}>
                        <li>
                            <HyperLink to="/">
                                <img className={classNames.menuIcon} src={homeIcon} alt=""/>
                            </HyperLink>
                        </li>
                        <li>
                            <HyperLink to="/catalog">Услуги</HyperLink>
                        </li>
                        <li>
                            <HyperLink to="/blog">Отзывы</HyperLink>
                        </li>
                        <li>
                            <HyperLink to="/blog">Вопросы и ответы</HyperLink>
                        </li>
                        <li>
                            <HyperLink to="/blog">Контакты</HyperLink>
                        </li>
                        <li>
                            <HyperLink to="/all-components">Components</HyperLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
