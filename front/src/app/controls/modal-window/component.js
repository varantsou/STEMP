import React from 'react';
import PropTypes from 'prop-types';

import utils from 'main/common/utils';

import './index.scss';

import closeIcon from 'icons/close.png';

const baseClassName = 'modal-window';

class ModalWindow extends React.PureComponent {
    constructor(props) {
        super(props);

        this.modalRef = React.createRef();
    }

    componentDidMount() {
        this.modalRef.current.focus();
    }

    getClassNames = () => {
        const { className } = this.props;
        const componentClassName = utils.getClassName(
            baseClassName,
            className,
        );

        return {
            component: componentClassName,
            container: `${baseClassName}__container`,
            main: `${baseClassName}__main`,
            header: `${baseClassName}__header`,
            title: `${baseClassName}__title`,
            body: `${baseClassName}__body`,
            closeButton: `${baseClassName}__close`
        };
    };

    render() {
        const classNames = this.getClassNames();
        const titleOutput = this.renderTitle(classNames);
        const closeIconOutput = this.renderCloseIcon(classNames);

        return (
            <div className={classNames.component}
                onKeyDown={this.handleKeyDown}
                onMouseDown={this.handleMouseDown}
                role="presentation"
                tabIndex="-1"
            >
                <div className={classNames.container}>
                    <section className={classNames.main} ref={this.modalRef} tabIndex="-1">
                        <div className={classNames.header}>
                            {titleOutput}
                            {closeIconOutput}
                        </div>

                        <div className={classNames.body}>
                            {this.props.children}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    renderCloseIcon = (classNames) => {
        const { hasCloseButton } = this.props;
        let output;

        if (hasCloseButton) {
            output = (
                <button className={classNames.closeButton} onClick={this.handleCloseClick}>
                    <img src={closeIcon} alt=""/>
                </button>
            );
        }

        return output;
    };

    renderTitle = (classNames) => {
        const { title } = this.props;
        let output;

        if (title) {
            output = (
                <h2 className={classNames.title}>{title}</h2>
            );
        }

        return output;
    };

    handleCloseClick = () => {
        const { onClose } = this.props;

        if (onClose) {
            onClose();
        }
    };

    handleKeyDown = (event) => {
        const { onClose } = this.props;

        if (event.keyCode === 27 && onClose) {
            onClose();
        }
    };

    handleMouseDown = (event) => {
        const { onClose } = this.props;

        if (!this.modalRef.current.contains(event.target) && onClose) {
            onClose();
        }
    };
}

ModalWindow.propTypes = {
    className: PropTypes.string,
    hasCloseButton: PropTypes.bool,
    title: PropTypes.string,
    onClose: PropTypes.func
};

ModalWindow.defaultProps = {
    hasCloseButton: true
};

export default ModalWindow;
