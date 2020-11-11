import React from 'react';
import styles from './styles.module.scss';
import Bear3 from '../../images/Bear3.png';
import { HorisontalMenu } from '../HorisontalMenu';

const aboutShopInfo = [
    {
        Idx: '8',
        Value: 'Філіалів по всій країні',
    },
    {
        Idx: '3',
        Value: 'роки на ринку',
    },
    {
        Idx: '121',
        Value: 'Товарів в каталозі',
    },
    {
        Idx: '12721',
        Value: 'Покупців',
    },
];

export const Footer = () => {
    return (
        <div>
            <div className={styles.top}>
                <h3 className={styles.tytle}>Про компанію</h3>
                {aboutShopInfo.map(({ Idx, Value }) => (
                    <p className={styles.littleWords} key={Math.random()}>
                        <span className={styles.span}>{Idx}</span>
                        {Value}
                    </p>
                ))}
            </div>
            <div className={styles.bottom}>
                <img src={Bear3} alt='Магазин іграшок' />
                <div className={styles.shopName}>
                    <p className={styles.name}>TOY SHOP</p>
                    <p>Магазин Дитячих Іграшок</p>
                </div>
                <HorisontalMenu className={styles.menu} />

                <p className={styles.phone}>+38(063)104-22-44</p>
                <button className={styles.button}>Замовити дзвінок</button>
            </div>
        </div>
    );
};
