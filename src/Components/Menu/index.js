import React from 'react';
import styles from './styles.module.scss';
import Bear from '../../images/Bear.png';
import Cart from '../../images/Cart.png';
import Button from '../../images/Button.png';
import { HorisontalMenu } from '../HorisontalMenu';

export const Menu = () => {
    return (
        <div>
            <div className={styles.Menu}>
                <img src={Bear} className={styles.logo} alt='логотип' />
                <div className={styles.shopName}>
                    <p className={styles.name}>TOY SHOP</p>
                    <p>Магазин Дитячих Іграшок</p>
                </div>

                <HorisontalMenu />

                <p className={styles.phone}>+38(063)104-22-44</p>
                <button className={styles.button}>Замовити дзвінок</button>

                <img src={Cart} className={styles.img} alt='Кошик' />
                <p className={styles.price}>1227 грн.</p>

                <img src={Button} className={styles.point} alt='склад кошику' />
            </div>
        </div>
    );
};
