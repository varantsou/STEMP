import React from 'react';
import PropTypes from 'prop-types';

import {
    // DadJokeProvider,
    useDadJokeState,
    useDadJokeActions
} from 'app/common/context/globalContext';

import Button from 'app/controls/button';

import MenuIcon from './icons/menu';
import Input from 'app/controls/input';

import './index.scss';

const baseClassName = 'header';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`,
        topHeader: `${baseClassName}-top`,
        menu: `${baseClassName}__menu`
    };
};

const Header = (props) => {
    const { dadJoke } = useDadJokeState();
    const { fetchDadJoke } = useDadJokeActions();

    const handleMenuClick = () => {
        const { onClick } = props;

        if (onClick) {
            onClick();
        }

        fetchDadJoke('new state value');
    };

    const classNames = getClassNames();

    return (
        <>

            <header className={classNames.component}>
                {dadJoke}
                <div className={classNames.topHeader}>
                    <Button onClick={handleMenuClick}>
                        <MenuIcon />
                    </Button>
                    <Input text="Search"/>
                </div>
            </header>
        </>
    );
};

Header.propTypes = {
    onClick: PropTypes.func
};

export default Header;
