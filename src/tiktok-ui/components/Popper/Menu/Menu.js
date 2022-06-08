import React, {
    useState,
    useEffect,
    useRef,
    useReducer,
    useMemo,
    memo,
    useCallback,
    useImperativeHandle,
    forwardRef,
    useTransition,
} from 'react';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { default as PopperWrapper } from '../Wrapper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ menuItems = [], children, ...tippyProps }) {
    const [history, setHistory] = useState([{ data: menuItems }]);
    const current = history[history.length - 1];
    const handleBack = (instance) => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const renderResult = (attrs, content, instance) => {
        return (
            <div
                className={cx('menu-list')}
                tabIndex="-1"
                {...attrs}
            >
                <PopperWrapper className="menu-popper">
                    {current.subTitle && (
                        <Header
                            title={current.subTitle}
                            onBack={handleBack}
                        />
                    )}
                    <div className={cx('menu-body')}>
                        {current.data.map((menuItem, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    data={menuItem}
                                    onClick={() => {
                                        const hasChildren = !!menuItem.children;
                                        if (hasChildren) {
                                            setHistory((prev) => [
                                                ...prev,
                                                {
                                                    subTitle: menuItem.children.title,
                                                    data: menuItem.children.data,
                                                },
                                            ]);
                                        }

                                        if (!hasChildren && history.length > 1) {
                                            setHistory((prev) => prev.slice(0, prev.length - 1));
                                        }
                                    }}
                                />
                            );
                        })}
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    //reset to first page.
    const handleResetMenu = (instance) => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <HeadlessTippy
            interactive
            delay={[0, 400]}
            placement={'top-end'}
            appendTo={() => document.body}
            render={renderResult}
            onHidden={handleResetMenu} //reset to first page on hidden.
            {...tippyProps}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    menuItems: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
};

export default memo(Menu);
