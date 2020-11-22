import React from 'react';
import styles from './styles.module.scss';

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
        <div className={styles.top}>
            <h3 className={styles.tytle}>Про компанію</h3>
            {aboutShopInfo.map(({ Idx, Value }) => (
                <p className={styles.littleWords} key={Math.random()}>
                    <span className={styles.span}>{Idx}</span>
                    {Value}
                </p>
            ))}
        </div>
    );
};
