import React from 'react';
import styles from './styles.module.scss';
import Monsters from '../../images/Monsters.png';
import Ellipse13 from '../../images/Ellipse13.png';
import Ellipse10 from '../../images/Ellipse10.png';
import Ellipse11 from '../../images/Ellipse11.png';
import HalfEllipse10 from '../../images/HalfEllipse10.png';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.descriptions}>
                <h1>Найкращі іграшкі</h1>
                <h1>на будь-який смак</h1>
                <p className={styles.paragraf}>
                    Ми зібрали найкращі іграшки від провідних виробників
                </p>
                <p>для дітей будь-якого віку.</p>
                <p>Порадуйте свою дитину</p>
                <button className={styles.button}>Дивитися каталог</button>
            </div>
            <img src={Ellipse10} className={styles.Ellipse10} alt=' ' />

            <img src={Ellipse11} className={styles.Ellipse11} alt=' ' />
            <img src={Monsters} className={styles.MonstersImg} alt='Іграшкові Монстри' />
            <img src={Ellipse13} className={styles.Ellipse13} alt=' ' />

            <img src={Ellipse13} className={styles.Ellipse13Left} alt=' ' />
            <img src={HalfEllipse10} className={styles.Ellipse10Left} alt=' ' />
        </div>
    );
};
