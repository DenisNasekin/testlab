import styles from './Stages.module.scss';
import { Items } from './constants';

export default function Stages() {
    return (
        <section id='stages' className={styles.section}>
            <h2 className={styles.title}>Как это работает</h2>
            <div className={styles.content}>
            {Items.map((item, index) => (
                <div className={styles.item} key={index}>
                    <img className={styles.icon} src={item.icon} alt={item.alt}/>
                    <div>
                    <h3 className={styles.titleIcon}>{item.title}</h3>
                    <p className={styles.text}>{item.text}</p>
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}   

