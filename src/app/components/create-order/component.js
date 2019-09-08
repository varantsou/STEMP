import React from 'react';

import Button from 'app/controls/button';
import ButtonGroup from 'app/controls/buttonGroup';
import Input from 'app/controls/input';
import Dropdown from 'app/controls/dropdown';

import './index.scss';

import background from './images/background.jpg';

const places = [
    'Могилев',
    'Минск',
    'Гомель',
    'Гродно',
    'Брест',
    'Витебск'
];

const baseClassName = 'create-order';
const getClassNames = () => {
    return {
        component: baseClassName,
        container: `${baseClassName}__container`,
        background: `${baseClassName}__background`,
        tabs: `${baseClassName}__tabs`,
        tabsHeader: `${baseClassName}__tabs-header`,
        tabsButton: `${baseClassName}__tabs-button`,
        tabsContent: `${baseClassName}__tabs-content`,
        tabsPanel: `${baseClassName}__tabs-panel`,
        order: `${baseClassName}__order`,
        orderRoute: `${baseClassName}__order-route`,
        orderSeparator: `${baseClassName}__order-separator`
    };
};

const CreateOrder = () => {
    const classNames = getClassNames();

    return (
        <div className={classNames.component}>
            <div className={classNames.background}>
                <img src={background} alt=""/>
            </div>
            <div className={classNames.container}>
                <div className={classNames.tabs}>
                    <div className={classNames.tabsHeader}>
                        <ButtonGroup>
                            <Button theme="yellow">Маршрут</Button>
                            <Button theme="yellow">Почасовая аренда</Button>
                        </ButtonGroup>
                    </div>
                    <div className={classNames.tabsContent}>
                        <div className={classNames.tabsPanel}>
                            <div className={classNames.orderRoute}>
                                <Dropdown options={places}>Откуда</Dropdown>
                                <span className={classNames.orderSeparator}> - </span>
                                <Dropdown options={places}>Куда</Dropdown>
                            </div>
                            <div className={classNames.orderRoute}>
                                <Input>Дата трансфера</Input>
                                <span className={classNames.orderSeparator}> - </span>
                                <Input>Время начала поездки</Input>
                            </div>
                            <Button theme="blue">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ И ЗАКАЗАТЬ</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrder;
