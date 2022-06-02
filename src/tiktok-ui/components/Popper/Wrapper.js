import classNames from 'classnames/bind';
import styles from './Popper.module.scss'

const cx = classNames.bind(styles);

function Wrapper({ className, children }) {
    return (
        <div className={cx('wrapper', 'menu-popper')}>
            {children}
        </div>
    );
}

export default Wrapper;