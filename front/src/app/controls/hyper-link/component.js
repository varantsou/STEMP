import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import utils from 'app/common/utils';

import './index.scss';

const baseClassName = 'hyper-link';
const getClassNames = (props) => {
    const { className, disabled } = props;

    const componentClassName = utils.getClassName(
        baseClassName,
        className,
        [`${baseClassName}--disabled`, disabled]
    );

    return {
        component: componentClassName
    };
};

const HyperLink = (props) => {
    const { external } = props;

    const handleFocus = () => {
        const { onFocus } = props;

        if (onFocus) {
            onFocus();
        }
    };

    const handleClick = () => {
        const { onClick } = props;

        if (onClick) {
            onClick();
        }
    };

    const renderExternalLink = (classNames) => {
        const {
            to,
            disabled,
            target,
            dataAttributes,
            download
        } = props;

        return (
            <a className={classNames.component}
                href={to}
                target={target}
                aria-disabled={disabled}
                {...dataAttributes}
                download={download}
            >
                {props.children}
            </a>
        );
    };

    const renderInternalLink = (classNames) => {
        const {
            to, disabled, target, navigation
        } = props;

        let output;

        if (navigation) {
            output = (
                <NavLink className={classNames.component}
                    to={to}
                    target={target}
                    aria-disabled={disabled}
                    onFocus={handleFocus}
                    onClick={handleClick}
                >
                    {props.children}
                </NavLink>
            );
        } else {
            output = (
                <Link className={classNames.component}
                    to={to}
                    target={target}
                    aria-disabled={disabled}
                    onFocus={handleFocus}
                    onClick={handleClick}
                >
                    {props.children}
                </Link>
            );
        }

        return output;
    };

    const render = () => {
        const classNames = getClassNames(props);
        let output;

        if (external) {
            output = renderExternalLink(classNames);
        } else {
            output = renderInternalLink(classNames);
        }

        return output;
    };

    return render();
};

HyperLink.propTypes = {
    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            pathname: PropTypes.string,
            search: PropTypes.string
        })
    ]).isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    target: PropTypes.string,
    download: PropTypes.string,
    external: PropTypes.bool,
    navigation: PropTypes.bool,
    onFocus: PropTypes.func,
    onClick: PropTypes.func,
    dataAttributes: PropTypes.object
};

// HyperLink.defaultProps = {
//     dataAttributes: {}
// };

export default HyperLink;
