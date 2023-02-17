import styles from './Menu.module.scss';
import Button from '../../Button';

export default function MenuItem({ data }) {
    return (
        <Button className={styles.menuItem} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}
