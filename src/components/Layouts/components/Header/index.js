import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '../Popper';
import SearchAccount from '../SearchAccount';
import Button from '../Button';

export default function Header() {
    const [input, setInput] = useState('');
    const [isClose, setIsClose] = useState('0');
    const [searchResult, setSearchResult] = useState([]);
    const searchRef = useRef();
    const handleClose = () => {
        setInput('');
        setIsClose('0');
        searchRef.current.focus();
    };
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 1000);
    }, []);
    useEffect(() => {
        if (input !== '') {
            setIsClose('1');
        } else {
            setIsClose('0');
        }
    }, [input]);
    console.log(searchResult);
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={styles.searchTitle}>Accounts</h4>
                                <SearchAccount />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={styles.search}>
                        <input
                            ref={searchRef}
                            value={input}
                            onChange={handleChange}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        {isClose === '1' ? (
                            <button className={styles.searchClose} onClick={handleClose}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        ) : isClose === '2' ? (
                            <FontAwesomeIcon className={styles.searchLoading} icon={faSpinner} />
                        ) : (
                            <></>
                        )}
                        <button className={styles.searchButton}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={styles.actions}>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}
