import styles from './Info.module.scss';

export default function Info() {
    return (
        <section id='info' className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Круто, ты дошел до третьего блока</h2>
                    <p className={styles.text}>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
                    <p className={styles.text}>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
                </div>
                <div className={styles.image}>
                    <img src='/image/phone.png' alt='info'/> 
                </div>
            </div>
        </section>
    )
}   
