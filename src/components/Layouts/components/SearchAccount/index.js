import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import styles from './SearchAccount.module.scss';
export default function SearchAccount() {
    return (
        <div className={styles.wrapper}>
            <img className={styles.avatar} src={images.ava} alt="" />
            <div className={styles.info}>
                <p className={styles.name}>
                    <h4>Nguyen Van A</h4>
                    <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />
                </p>
                <span className={styles.username}>nguyenVanA</span>
            </div>
        </div>
    );
}
