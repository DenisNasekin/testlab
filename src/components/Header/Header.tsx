import Menu from '../Menu/Menu';
import styles from './Header.module.scss';
import { Links } from './constants';
import { useState } from 'react';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const openMenu = () => {
        setIsActive(!isActive);
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a className={styles.logo} href="#"><img src='/image/logo.svg' alt='logo'/></a>
                <button className={styles.button} onClick={openMenu}>
                    <img src='/image/menu.svg' alt='logo'/>
                </button>
                <nav className={styles.nav}>
                    {Links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.link}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
            {isActive && (
                <Menu isActive={isActive} onClose={() => setIsActive(false)} />
            )}
        </header>
    );
}