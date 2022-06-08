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
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!/ optional
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../../../components/AccountItem';
import Button from '../../../components/Button';
import {
    faCircleUser,
    faCloudUpload,
    faUser,
    faCutlery,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faSignIn,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '../../../components/Image';
import { Search } from '../Search';
import routeConfig from '~/config';
import { Link } from 'react-router-dom';

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
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleUser} />,
        title: 'Feadback and help',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Logout',
        to: '/logout',
        separate: true,
    },
];

const currentUser = true;

function Header() {
    const imgRef = useCallback(() => React.createRef(), []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* {logo} */}
                <Link
                    to={routeConfig.routes.home}
                    className={cx('logo')}
                >
                    <img src={images.logo.default} />
                </Link>
                {/* {search} */}
                <Search />
                {/* {action buttons} */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                primary
                                // className={'custom-login'}
                                rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                            >
                                Login
                            </Button>
                        </>
                    )}

                    <Menu
                        menuItems={currentUser ? userMenu : MENU_ITEMS}
                        hideOnClick={false}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3b63047182f8c2a5b0f186a1a2beb9aa~c5_100x100.jpeg?x-expires=1654657200&x-signature=Guja243oA8cGUxJXpxMWwEkOuAc%3D"
                                alt="Ng van a"
                                ref={imgRef}
                                fallback="https://cdn.dribbble.com/users/27766/screenshots/3488007/media/30313b019754da503ec0860771a5536b.png?compress=1&resize=400x300"
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
