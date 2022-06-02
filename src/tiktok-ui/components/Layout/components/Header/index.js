import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext, useImperativeHandle, forwardRef, useTransition } from "react";
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Tippy from '@tippyjs/react/headless'; // different import path!/ optional
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import { faCircleUser, faCubesStacked, faCutlery, faEarthAsia, faEllipsisVertical, faKeyboard, faSignIn } from "@fortawesome/free-solid-svg-icons";
import Menu from "~/components/Popper/Menu";


const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleUser} />,
        title: 'Feadback and help',
        to: 'feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut'
    },
]
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {

    }, [])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* {logo} */}
                <div className={cx('logo')}>
                    <img src={images.logo.default} />
                </div>
                {/* {search} */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => {
                        return (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )
                    }}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search..." />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={solid('x')} />
                        </button>
                        <FontAwesomeIcon icon={solid('circle-notch')} className={cx('loading')} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={solid('magnifying-glass')} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text >
                        Upload
                    </Button>
                    <Button
                        primary
                        // className={'custom-login'}
                        rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                    >
                        Login
                    </Button>
                    <Menu
                        menuItems={MENU_ITEMS}
                    >
                        <button className={cx('more-button')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;