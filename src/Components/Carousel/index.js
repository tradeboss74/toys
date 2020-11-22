import React from 'react';
import styles from './styles.module.scss';
import ElasticCarousel from 'react-elastic-carousel';
import { array } from '../Import';
import { HorisontalMenu } from '../HorisontalMenu';
import { ItemCard } from '../ItemCard';

const breakPoints = [
    {
        width: 450,
        itemsToShow: 1,
        itemsToScroll: 1,
    },
    {
        width: 600,
        itemsToShow: 2,
        itemsToScroll: 1,
    },
    { width: 800, itemsToShow: 3, itemsToScroll: 1 },

    {
        width: 900,
        itemsToShow: 4,
        itemsToScroll: 1,
    },
];

export const Carousel = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Найкраща пропозиція</h2>
            <HorisontalMenu type='carousel' />
            <ElasticCarousel
                itemsToScroll={1}
                itemsToShow={4}
                breakPoints={breakPoints}
                className={styles.carousel}
            >
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
