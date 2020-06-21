import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

import bg from 'app/images/bg_style_1.png';

const baseClassName = 'popup-slider';
const getClassNames = () => {
    return {
        component: baseClassName,
        content: `${baseClassName}__content`,
        header: `${baseClassName}__header`,
        headerText: `${baseClassName}__header-text`,
        body: `${baseClassName}__body`,
        bg: `${baseClassName}__bg`,
        bgImage: `${baseClassName}__bg-image`
    };
};

const PopupSlider = (props) => {
    const [opened, setOpened] = useState(props.opened || false);

    const classNames = getClassNames();

    const handleClose = () => {
        const { onClose } = props;

        setOpened(false);

        if (onClose) {
            onClose();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const { onClose } = props;

            setOpened(false);

            if (onClose) {
                onClose();
            }
        }
    };

    const componentClassName = opened ? `${classNames.component} opened` : classNames.component;

    const render = () => (
        <div className={componentClassName}>
            <div className={classNames.content}>
                <div className={classNames.header}>
                    <img className={classNames.bgImage} src={bg} alt="bg"/>
                    Valery Varantsou
                </div>
                <div className={classNames.body}>
                    Body
                </div>
            </div>
            <div
                className={classNames.bg}
                onClick={handleClose}
                onKeyPress={handleKeyPress}
                role="button"
                tabIndex={0}
            />
        </div>
    );

    useEffect(() => {
        setOpened(props.opened);
    });

    return render();
};

PopupSlider.propTypes = {
    opened: PropTypes.bool,
    onClose: PropTypes.func
};

export default PopupSlider;
