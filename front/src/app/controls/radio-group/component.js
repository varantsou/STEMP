import React from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';

import utils from 'main/common/utils';

import './index.scss';

import iconRadioButtonOff from 'icons/radio-button-off.svg';
import iconRadioButtonOn from 'icons/radio-button-on.svg';

const baseClassName = 'radio-group';

class RadioGroup extends React.PureComponent {
    constructor(props) {
        super(props);

        const state = this.createState(props.checkedIndex, props.checkedValue, props.items);

        this.state = {
            ...state
        };
    }

    componentDidUpdate(prevProps) {
        const checkedIndexChanged = this.props.checkedIndex !== prevProps.checkedIndex;
        const checkedValueChanged = this.props.checkedValue !== prevProps.checkedValue;
        const itemsChanged = this.props.items !== prevProps.items;
        const shouldUpdateCheckedIndex = checkedIndexChanged && this.state.checkedIndex !== this.props.checkedIndex;
        const shouldUpdateCheckedValue = checkedValueChanged && this.state.checkedValue !== this.props.checkedValue;
        const shouldUpdateItems = itemsChanged && this.state.items !== this.props.items;

        if (shouldUpdateCheckedIndex || shouldUpdateCheckedValue || shouldUpdateItems) {
            let checkedIndex;
            let checkedValue;
            let items;

            if (!isNil(this.props.checkedIndex)) {
                checkedIndex = this.props.checkedIndex;
            } else {
                checkedIndex = this.state.checkedIndex;
            }

            if (!isNil(this.props.checkedValue)) {
                checkedValue = this.props.checkedValue;
            } else {
                checkedValue = this.state.checkedValue;
            }

            if (!isNil(this.props.items)) {
                items = this.props.items;
            } else {
                items = this.state.items;
            }

            const state = this.createState(checkedIndex, checkedValue, items);

            this.setState(state);
        }
    }

    getClassNames = () => {
        const { className } = this.props;

        const componentClassName = utils.getClassName(
            baseClassName,
            className
        );

        return {
            component: componentClassName,
            items: `${baseClassName}__items`,
            item: `${baseClassName}__item`,
            itemValue: `${baseClassName}__item-value`,
            itemValueIcon: `${baseClassName}__item-value-icon`,
            itemContainer: `${baseClassName}__item-container`
        };
    };

    render() {
        const { disabled } = this.props;

        const classNames = this.getClassNames();

        const itemsOutput = this.renderItems(classNames);

        return (
            <div className={classNames.component}
                role="radiogroup"
            >
                <fieldset className={classNames.items}
                    aria-disabled={disabled}
                    disabled={disabled}
                >
                    {itemsOutput}
                </fieldset>
            </div>
        );
    }

    renderItems = (classNames) => {
        const { items, disabled, renderItem } = this.props;
        const { checkedIndex } = this.state;

        return items.map((item, index) => {
            const checked = (index === checkedIndex);
            const itemIcon = checked ? iconRadioButtonOn : iconRadioButtonOff;
            const itemOutput = (renderItem || this.renderItem)(item, checked);

            return (
                <div className={classNames.item}
                    key={index}
                    tabIndex="0"
                    role="radio"
                    aria-checked={checked}
                    aria-disabled={disabled}
                    onClick={this.handleItemClick(index)}
                    onKeyDown={this.handleItemKeyDown(index)}
                    onBlur={this.handleComponentBlur}
                >
                    <div className={classNames.itemValue}>
                        <img className={classNames.itemValueIcon} src={itemIcon} alt="" />
                    </div>

                    <div className={classNames.itemContainer}>
                        {itemOutput}
                    </div>
                </div>
            );
        });
    };

    renderItem = () => (item) => {
        return (
            <>
                {item}
            </>
        );
    };

    handleItemClick = (index) => () => {
        this.setCheckedIndex(index);
    };

    handleItemKeyDown = (index) => (event) => {
        const keyCode = event.keyCode;

        if (keyCode === 32) {
            event.preventDefault();
            this.setCheckedIndex(index);
        }
    };

    handleComponentBlur = () => {
        const { onLostFocus } = this.props;
        const { checkedValue, checkedIndex } = this.state;

        if (onLostFocus) {
            onLostFocus(checkedValue, checkedIndex);
        }
    };

    setCheckedIndex = (index) => {
        const { checkedIndex, onChanged } = this.props;
        const { items } = this.state;

        if (checkedIndex === index) {
            return;
        }

        const item = items[index];
        let newCheckedIndex;
        let newCheckedValue;

        if (item) {
            newCheckedIndex = index;
            newCheckedValue = this.getItemValue(item);
        } else {
            newCheckedIndex = -1;
            newCheckedValue = undefined;
        }

        this.setState({
            checkedIndex: newCheckedIndex,
            checkedValue: newCheckedValue
        });

        if (onChanged) {
            onChanged(newCheckedValue, newCheckedIndex);
        }
    };

    createState = (checkedIndex, checkedValue, items) => {
        const state = {
            checkedIndex: -1,
            checkedValue: undefined
        };

        if (Array.isArray(items)) {
            state.items = items;
        } else if (items) {
            state.items = [items];
        } else {
            state.items = [];
        }

        if (!isNil(checkedIndex)) {
            for (let i = 0; i < state.items.length; i++) {
                const item = state.items[i];

                if (i === checkedIndex) {
                    state.checkedIndex = i;
                    state.checkedValue = this.getItemValue(item);
                    break;
                }
            }
        } else if (!isNil(checkedValue)) {
            state.checkedValue = checkedValue;

            for (let i = 0; i < state.items.length; i++) {
                const item = state.items[i];

                if (this.getItemValue(item) === checkedValue) {
                    state.checkedIndex = i;
                    break;
                }
            }
        }

        return state;
    };

    getItemValue = (item) => {
        const { itemValueField } = this.props;

        return item[itemValueField || 'value'];
    };
}

RadioGroup.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    itemValueField: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    validate: PropTypes.bool,
    checkedIndex: PropTypes.number,
    checkedValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    renderItem: PropTypes.func,
    onChanged: PropTypes.func,
    onLostFocus: PropTypes.func
};

RadioGroup.defaultProps = {
    validate: true
};

export default RadioGroup;
