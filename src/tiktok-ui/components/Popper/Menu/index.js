import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext, useImperativeHandle, forwardRef, useTransition } from "react";
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { default as PopperWrapper } from '../Wrapper';
import MenuItem from './MenuItem';
import Header from './Header';
import { unstable_HistoryRouter } from "react-router-dom";

const cx = classNames.bind(styles);

function Menu({ menuItems = [], children }) {
    const [history, setHistory] = useState([{ data: menuItems }]);
    const current = history[history.length - 1];

    return (
        <Tippy
            interactive
            delay={[0, 200]}
            visible
            placement={'top-end'}
            render={(attrs, content, instance) => {
                return (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className="menu-popper">
                            {
                                current.subTitle && <Header
                                    title={current.subTitle}
                                    onBack={() => {
                                        setHistory(prev => prev.slice(0, prev.length - 1))
                                    }}
                                />
                            }
                            {
                                current.data.map((menuItem, index) => {
                                    return (
                                        <MenuItem
                                            key={index}
                                            data={menuItem}
                                            onClick={() => {
                                                console.log(menuItem.title)
                                                const hasChildren = !!menuItem.children;
                                                if (hasChildren) {
                                                    setHistory(prev => [
                                                        ...prev,
                                                        {
                                                            subTitle: menuItem.children.title,
                                                            data: menuItem.children.data
                                                        }
                                                    ])
                                                }

                                                if (!hasChildren && history.length > 1) {
                                                    setHistory(prev => prev.slice(0, prev.length - 1))
                                                }
                                            }}
                                        />
                                    )
                                })
                            }
                        </PopperWrapper>
                    </div>
                )
            }
            }
        >
            {children}
        </ Tippy >
    );
}

export default Menu;