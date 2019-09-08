import React from 'react';
import PropTypes from 'prop-types';

import utils from 'main/common/utils';

import './index.scss';

import iconCheckButtonOn from 'icons/check-button-on.svg';

const baseClassName = 'checkbox';

class Checkbox extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            checked: !!props.checked
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.checked !== this.props.checked) {
            this.setState({
                checked: !!this.props.checked
            });
        }
    }

    getClassNames = () => {
        const { className, disabled } = this.props;
        const { checked } = this.state;
        const componentClassName = utils.getClassName(
            baseClassName,
            className,
            [`${baseClassName}--checked`, checked],
            [`${baseClassName}--disabled`, disabled]
        );

        return {
            component: componentClassName,
            value: `${baseClassName}__value`,
            valueIcon: `${baseClassName}__value-icon`
        };
    };

    render() {
        const { disabled } = this.props;
        const { checked } = this.state;

        const classNames = this.getClassNames();

        const valueOutput = this.renderValue(classNames);

        return (
            <div className={classNames.component}
                tabIndex="0"
                role="checkbox"
                aria-checked={checked}
                aria-disabled={disabled}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
                onBlur={this.handleBlur}
            >
                {valueOutput}
                {this.props.children}
            </div>
        );
    }

    renderValue = (classNames) => {
        const { checked } = this.state;

        let output;

        if (checked) {
            output = (
                <img className={classNames.valueIcon} src={iconCheckButtonOn} alt="" />
            );
        }

        return (
            <div className={classNames.value}>
                {output}
            </div>
        );
    };

    handleClick = () => {
        this.toggleChecked();
    };

    handleKeyDown = (event) => {
        const keyCode = event.keyCode;

        if (keyCode === 32) {
            event.preventDefault();
            this.toggleChecked();
        }
    };

    handleBlur = () => {
        const { onLostFocus } = this.props;
        const { checked } = this.state;

        if (onLostFocus) {
            onLostFocus(checked);
        }
    };

    toggleChecked = () => {
        const { checked } = this.state;
        const { onChanged } = this.props;

        const newChecked = !checked;

        this.setState({
            checked: newChecked
        });

        if (onChanged) {
            onChanged(newChecked);
        }
    };
}

Checkbox.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    validate: PropTypes.bool,
    onChanged: PropTypes.func,
    onLostFocus: PropTypes.func
};

Checkbox.defaultProps = {
    validate: true
};

export default Checkbox;
