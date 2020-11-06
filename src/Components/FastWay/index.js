import React from 'react';
import styles from './styles.module.scss';
import Rectangle1 from '../../images/Rectangle1.png';
import Rectangle2 from '../../images/Rectangle2.png';
import HalfEllipse16 from '../../images/HalfEllipse16.png';

export const FastWay = () => {
    return (
        <div className={styles.container}>
            <img src={Rectangle1} className={styles.Rectangle1} alt='розділ сайту - Конструктори' />
            <img
                src={Rectangle2}
                className={styles.Rectangle2}
                alt='розділ сайту - іграшкові тварини'
            />
            <img src={HalfEllipse16} className={styles.HalfEllipse16} alt='еліпс' />
        </div>
    );
};
