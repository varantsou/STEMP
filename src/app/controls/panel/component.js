import React from 'react';
import PropTypes from 'prop-types';

import Button from 'main/controls/button';
import utils from 'main/common/utils';

import './index.scss';

const baseClassName = 'panel';

class Panel extends React.PureComponent {
    getClassNames = () => {
        const { className } = this.props;
        const componentClassName = utils.getClassName(
            baseClassName,
            className,
        );

        return {
            component: componentClassName,
            content: `${baseClassName}__content`,
            header: `${baseClassName}__header`,
            title: `${baseClassName}__title`,
            button: `${baseClassName}__button`
        };
    };

    render() {
        const classNames = this.getClassNames();
        const buttonOutput = this.renderButton(classNames);
        const titleOutput = this.renderTitle(classNames);

        return (
            <div className={classNames.component}>
                <div className={classNames.content}>
                    <div className={classNames.header}>
                        {titleOutput}
                        {buttonOutput}
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }

    renderButton = (classNames) => {
        const { buttonText } = this.props;
        let output;

        if (buttonText) {
            output = (
                <Button className={classNames.button}
                    onClick={this.handleButtonClick}
                    theme="link border"
                >
                    {buttonText}
                </Button>
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

    handleButtonClick = () => {
        const { onClick } = this.props;

        if (onClick) {
            onClick();
        }
    };
}

Panel.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func
};

export default Panel;
