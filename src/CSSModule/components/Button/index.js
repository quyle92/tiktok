import styles from './Button.module.scss';
import clsx from 'clsx';

export default function Button({ primary, large }) {
    return (
        <>
            <button
                className={clsx(styles.btn, 'd-flex', {
                    [styles.primary]: primary,
                    [styles['btn-lg']]: large,
                })}
            >
                Click me!
            </button>
        </>
    );
}
