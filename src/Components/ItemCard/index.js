import React from 'react';
import styles from './styles.module.scss';
import arrow from '../../images/VectorLeft.png';

export const ItemCard = ({ Name, img, alt, inStock, price, link }) => {
    return (
        <a className={styles.a} href={link} target='_blank' rel='noopener noreferrer'>
            <img className={styles.img} src={img} alt={alt} />
            <h3>{Name}</h3>
            <p className={styles.availability}>{inStock}</p>
            <p>{price}</p>
            <img src={arrow} className={styles.arrow} alt='' />
        </a>
    );
};
