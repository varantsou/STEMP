import React from 'react';

import Input from 'app/controls/input';
import Button from 'app/controls/button';
import Dropdown from 'app/controls/dropdown';

const places = [
    'Могилев',
    'Минск',
    'Гомель',
    'Гродно',
    'Брест',
    'Витебск'
];

import './index.scss';

const baseClassName = 'components';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`
    };
};

const ComponentsPage = () => {
    const classNames = getClassNames();

    return (
        <div className={classNames.component}>
            <div className={classNames.container}>
                <Input
                    disabled={false}
                    placeholder=""
                >
                    Input label
                </Input>
                <hr/>
                <Input
                    disabled={true}
                    placeholder=""
                    multiline={true}
                />
                <hr/>
                <Button>Button</Button>
                <hr/>
                <Dropdown options={places}/>
            </div>
        </div>
    );
};

export default ComponentsPage;
