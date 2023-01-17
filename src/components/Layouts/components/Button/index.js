import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
export default function Button({ to, href, primary, children, onClick, ...passProps }) {
    let Comp = 'button';
    let classes = `${styles.wrapper}`;
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    } else if (primary) {
        classes = `${styles.wrapper} ${styles.primary}`;
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}
