import React from 'react';
import styles from './styles.module.scss';
import { array } from '../Import';
import { ItemCard } from '../ItemCard';
import ellipse from '../../images/Ellipse15.png';

export const Catalog = () => {
    return (
        <div>
            <h1 className={styles.h1}>Каталог товарів</h1>
            <div className={styles.container}>
                {array.map(({ Name, inStock, price, img, alt, link }) => (
                    <a
                        className={styles.div}
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        key={Math.random()}
                    >
                        <ItemCard Name={Name} img={img} alt={alt} inStock={inStock} price={price} />
                    </a>
                ))}
                <img src={ellipse} className={styles.ellipse} alt='' />
            </div>
        </div>
    );
};
