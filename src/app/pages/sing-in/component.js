import React from 'react';

import Input from 'app/controls/input';
import Button from 'app/controls/button';

import './index.scss';

const baseClassName = 'sing-in';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`
    };
};

const SingIn = () => {
    const classNames = getClassNames();

    const handleClick = () => {
        alert();
    };

    const render = () => {
        return (
            <div className={classNames.component}>
                <div className={classNames.container}>
                    <Input/>
                    <Button theme="blue" onClick={handleClick}>Sing in</Button>
                </div>
            </div>
        );
    };

    return render();
};

export default SingIn;
