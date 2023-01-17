import Header from '../components/Header';
import styles from './OnlyHeaderLayout.module.scss';

export default function OnlyHeaderLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>{children}</div>
        </div>
    );
}
