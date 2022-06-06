import classnames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Image from '~/components/Image'
const cx = classnames.bind(styles);

function AccountItem({ fullName, nickname, avatar, tick, setSearchResult }) {
    const navigate = useNavigate();

    function handleClick() {
        setSearchResult([])
        navigate(`/@${nickname}`, { replace: true });
    }
    return (
        // <Link to={`/@${nickname}`} className={cx('wrapper')}>
        <div className={cx('wrapper')} onClick={handleClick}>
            <Image
                src={avatar}
                className={cx('avatar')}
                alt={nickname}
                fallback="https://cdn.dribbble.com/users/27766/screenshots/3488007/media/30313b019754da503ec0860771a5536b.png?compress=1&resize=400x300"
            />
            <div>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{fullName}</span>
                        {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </h4>
                </div>
                <span className={cx('username')}>{nickname}</span>
            </div>
        </div>
        // </Link>
    );
}

export default AccountItem;