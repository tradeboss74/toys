import React from 'react';
import styles from './styles.module.scss';
import { array } from '../Import';
import ellipse from '../../images/Ellipse15.png';
import arrow from '../../images/VectorLeft.png';

const click = () => {};

export const Catalog = () => {
    return (
        <div>
            <h1 className={styles.h1}>Каталог товарів</h1>
            <div className={styles.container}>
                {array.map(({ Name, inStock, price, img, alt, link }) => (
                    <a className={styles.div} href={link} target='_blank' rel='noopener noreferrer'>
                        <img className={styles.img} src={img} alt={alt} />
                        <h3>{Name}</h3>
                        <p className={styles.availability}>{inStock}</p>
                        <p>{price}</p>
                        <img src={arrow} className={styles.arrow} alt='' />
                    </a>
                ))}
                <img src={ellipse} className={styles.ellipse} alt='' />
            </div>
        </div>
    );
};
