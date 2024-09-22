import Header from '../Header/Header';
import styles from './Main.module.scss';

export default function Main() {
    return (
        <section className={styles.section}>
            <Header />
            <div className={styles.overlay} />   
            <div className={styles.container}>
                <h1 className={styles.title}>Говорят, никогда не поздно сменить профессию</h1>
                <p className={styles.text}>Сделай круто тестовое задание и у тебя получится</p>
                <button className={styles.button}>Проще простого!</button>
            </div>   
        </section>
    );
}