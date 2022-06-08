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
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../../../components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!/ optional
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    faCommentDollar,
} from '@fortawesome/free-solid-svg-icons';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import _debounce from 'lodash/debounce';
import * as http from '../../../utils/http';
import * as searchServices from '../../../services/searchService';
import useDebounce from '../../../hooks/useDebounce';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    //Option 1: using debounce from lodash (ref: https://stackoverflow.com/a/58594348/11297747)
    // const debouncedChangeHandler =
    //     useCallback(
    //         _debounce((e) => setSearchValue(e), 1000)
    //         , []);

    //Option 2:use custom hook debounce.
    const debouncedSearchTerm = useDebounce(searchValue, 500);
    const debouncedChangeHandler = (val) => {
        setSearchValue(val);
    };

    useEffect(() => {
        if (!debouncedSearchTerm || !debouncedSearchTerm.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        (async function () {
            try {
                const rs = await searchServices.search(debouncedSearchTerm, 'less');
                if (rs) setSearchResult(rs);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [debouncedSearchTerm]);

    return (
        <HeadlessTippy
            interactive
            appendTo={() => document.body} //this is to silent tippyjs warning on console dev tool.
            visible={searchResult.length > 0 && showResult === true}
            render={(attrs) => {
                return (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result, index) => {
                                return (
                                    <AccountItem
                                        key={index}
                                        fullName={result.full_name}
                                        nickname={result.nickname}
                                        avatar={result.avatar}
                                        setSearchResult={setSearchResult}
                                    />
                                );
                            })}
                        </PopperWrapper>
                    </div>
                );
            }}
            onClickOutside={(instance, event) => {
                handleHideResult();
            }}
        >
            <div className={cx('search')}>
                <input
                    placeholder="Search..."
                    onChange={(e) => {
                        console.log(/^\s/.test(e.target.value));
                        if (/^\s/.test(e.target.value)) {
                            return;
                        }
                        debouncedChangeHandler(e.target.value);
                    }}
                    value={searchValue}
                    ref={inputRef}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={solid('x')} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        icon={solid('circle-notch')}
                        className={cx('loading')}
                    />
                )}
                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <FontAwesomeIcon icon={solid('magnifying-glass')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
