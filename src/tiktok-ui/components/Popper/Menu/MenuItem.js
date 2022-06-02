import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Header from "./Header";
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {

    return (<>
        <Button
            text
            className={cx('menu-item')}
            leftIcon={data.icon}
            onClick={onClick}
            to={data.to}
        >
            {data.title}
        </Button>

    </>
    );
}

export default MenuItem;