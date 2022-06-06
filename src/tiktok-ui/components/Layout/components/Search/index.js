import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext, useImperativeHandle, forwardRef, useTransition } from "react";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../../../AccountItem';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!/ optional
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faCloudUpload, faUser, faCutlery, faEarthAsia, faEllipsisVertical, faKeyboard, faSignIn, faCoins, faGear, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import _debounce from 'lodash/debounce';
import useDebounce from '../../../../hooks/useDebounce';
import * as http from '../../../../utils/http';
import * as searchServices from '../../../../apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue("");
        setSearchResult([])
        inputRef.current.focus();
    }
    const handleHideResult = () => {
        setShowResult(false)
    }

    //Option 1: using debounce from lodash (ref: https://stackoverflow.com/a/58594348/11297747)
    // const debouncedChangeHandler =
    //     useCallback(
    //         _debounce((e) => setSearchValue(e), 1000)
    //         , []);

    //Option 2:use custom hook debounce.
    const debouncedSearchTerm = useDebounce(searchValue, 500);
    const debouncedChangeHandler = (val) => {
        setSearchValue(val);
    }

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        // (async function () {
        //     try {
        //         const res = await http.get(`users/search?q=${encodeURIComponent(debouncedSearchTerm)}&type=less`);
        //         setSearchResult(res.data);
        //     } catch (error) {
        //         console.log(error);
        //     } finally {
        //         setLoading(false);
        //     }
        // })();
        (async function () {
            try {
                const rs = await searchServices.search(debouncedSearchTerm, "less");
                setSearchResult(rs);
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false);
            }
        })();
    }, [debouncedSearchTerm]);

    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0 && showResult === true}
            render={(attrs) => {
                return (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {
                                searchResult.map((result, index) => {
                                    return <AccountItem
                                        key={index}
                                        fullName={result.full_name}
                                        nickname={result.nickname}
                                        avatar={result.avatar}
                                        setSearchResult={setSearchResult}
                                    />
                                })
                            }
                        </PopperWrapper>
                    </div>
                )
            }}
            onClickOutside={(instance, event) => {
                handleHideResult()
            }}
        >
            <div className={cx('search')}>
                <input
                    placeholder="Search..."
                    onChange={(e) => {
                        debouncedChangeHandler(e.target.value);
                    }}
                    // value={searchValue}
                    ref={inputRef}
                    onFocus={() => setShowResult(true)}
                />
                {(!!searchValue && !loading) &&
                    <button
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={solid('x')} />
                    </button>
                }
                {loading && <FontAwesomeIcon icon={solid('circle-notch')} className={cx('loading')} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={solid('magnifying-glass')} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;