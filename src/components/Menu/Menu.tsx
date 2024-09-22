import { useState } from 'react';
import { Links } from '../Header/constants';
import styles from './Menu.module.scss';

type Props = {
    isActive: boolean;
    onClose: () => void;
}
export default function Menu({isActive, onClose}: Props) {
    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src='/image/logo-mob.svg' alt='logo'/>
                    <button className={styles.button} onClick={onClose}/>
                </div>
                <nav className={styles.nav}>
                    {Links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.link}
                        >
                            {link.name}
                            <img className={styles.arrow} src='/image/arrow.svg' alt='arrow'/>
                        </a>
                        
                    ))}
                </nav>
            </div>
        </div>
    );
}