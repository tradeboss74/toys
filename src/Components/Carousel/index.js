import React from 'react';
import styles from './styles.module.scss';
import ElasticCarousel from 'react-elastic-carousel';
import { array } from '../Import';
import { HorisontalMenu } from '../HorisontalMenu';
import { ItemCard } from '../ItemCard';

export const Carousel = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Найкраща пропозиція</h2>
            <HorisontalMenu />
            <ElasticCarousel itemsToScroll={1} itemsToShow={4} className={styles.carousel}>
                {array.map(({ Name, inStock, price, img, alt, link }) => (
                    <ItemCard
                        Name={Name}
                        img={img}
                        alt={alt}
                        inStock={inStock}
                        price={price}
                        link={link}
                        key={Math.random()}
                    />
                ))}
            </ElasticCarousel>
        </div>
    );
};
