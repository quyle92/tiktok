import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

// loại button (<a href />, router link, normal button).
// màu sắc (primary).
// kích thước (small, large).
// trang thái (disabled).
// nội dụng button (children).
// event (oncLick).
// custom class (className).
// other props (passProps).
function Button({
    to,
    href,
    children,
    primary = false,
    text = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = "button";
    const classes = cx('wrapper', className, {
        primary,
        outline,
        small,
        large,
        disabled,
        text,
        rounded,

    });
    const props = { onClick, ...passProps }
    if (to) {
        props.to = to
        Comp = Link
    }
    if (href) {
        props.href = href
        Comp = 'a'
    }

    //remove event listener when disabled is true.
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>
                {children}
            </span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;