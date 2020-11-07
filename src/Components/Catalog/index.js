import React from 'react';
import styles from './styles.module.scss';
import rabbit from '../../images/rabbit.png';
import robot from '../../images/robot.png';
import bear2 from '../../images/bear2.png';
import blueRabbit from '../../images/blueRabbit.png';
import softToy from '../../images/softToy.png';
import blueDog from '../../images/blueDog.png';
import mouse from '../../images/mouse.png';
import blueEars from '../../images/blueEars.png';
import Ellipse15 from '../../images/Ellipse15.png';
import { array } from '../Import';

export const Catalog = () => {
    return (
        <div>
            <h1 className={styles.h1}>Каталог товарів</h1>
            <div className={styles.container}>
                {array.map(({ Name, inStock, price, img, alt }) => (
                    <div className={styles.div}>
                        <img className={styles.img} src={img} alt={alt} />
                        <h3>{Name}</h3>
                        <p className={styles.availability}>{inStock}</p>
                        <p>{price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
