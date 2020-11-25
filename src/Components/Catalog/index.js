import React, { useState } from 'react';
import styles from './styles.module.scss';
import { array } from '../Import';
import { ItemCard } from '../ItemCard';
import ellipse from '../../images/Ellipse15.png';

export const Catalog = () => {
    // const [QtyColumns, setQtyColumns] = useState(4);
    return (
        <div>
            <h1 className={styles.h1}>Каталог товарів</h1>
            <div
                className={styles.container}
                // style={{
                //     gridTemplateColumns: `repeat(${QtyColumns}, 1fr)`,
                //     overflowX: 'scroll',
                // }}
            >
                {/* <input
                    value={QtyColumns}
                    onChange={(event) => {
                        setQtyColumns(event.target.value);
                    }}
                /> */}
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
                <img src={ellipse} className={styles.ellipse} alt='' />
            </div>
        </div>
    );
};
