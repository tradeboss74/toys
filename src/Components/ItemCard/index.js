import React from 'react';
import styles from './styles.module.scss';
import arrow from '../../images/VectorLeft.png';

export const ItemCard = ({ Name, img, alt, inStock, price, link }) => {
    return (
        <div className={styles.div}>
            <img className={styles.img} src={img} alt={alt} />
            <h3>{Name}</h3>
            <p className={styles.availability}>{inStock}</p>
            <p>{price}</p>
            <img src={arrow} className={styles.arrow} alt='' />
        </div>
    );
};
