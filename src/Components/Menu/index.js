import React from 'react';
import styles from './styles.module.scss';
import Bear from '../../images/Bear.png';
import Cart from '../../images/Cart.png';
import Button from '../../images/Button.png';

export const Menu = () => {
    return (
        <div className={styles.Menu}>
            <img src={Bear} className={styles.logo} alt='логотип' />
            <div className={styles.shopName}>
                <p className={styles.name}>TOY SHOP</p>
                <p>Магазин Дитячих Іграшок</p>
            </div>

            <a
                href='https://www.google.com/search?q=%D0%B1%D1%80%D1%8F%D0%B7%D0%BA%D0%B0%D0%BB%D1%8C%D1%86%D1%8F&lr=lang_uk&newwindow=1&tbs=lr:lang_1uk&sxsrf=ALeKk02i_-BN6FSpiawAOFBE1Y2OYl_QSw:1604482133349&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi62uzcyejsAhVk_CoKHYp6AJkQ_AUoAXoECAUQAw&biw=974&bih=737'
                className={styles.first}
                target='_blank'
                rel='noopener noreferrer'
            >
                Малюкам
            </a>

            <a
                href='https://www.google.com/search?q=%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8+%D0%B4%D0%BB%D1%8F+%D1%85%D0%BB%D0%BE%D0%BF%D1%87%D0%B8%D0%BA%D1%96%D0%B2&tbm=isch&ved=2ahUKEwiB3dPeyejsAhVXwioKHbe2DSIQ2-cCegQIABAA&oq=%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8+%D0%B4%D0%BB%D1%8F+%D1%85%D0%BB%D0%BE%D0%BF%D1%87%D0%B8%D0%BA%D1%96%D0%B2&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BQgAELEDUIT4J1jIuShg5cgoaABwAHgAgAG7AYgBkBiSAQQwLjIxmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=WXSiX8HMB9eEqwG37baQAg&bih=737&biw=974&tbs=lr%3Alang_1uk'
                className={styles.second}
                target='_blank'
                rel='noopener noreferrer'
            >
                Хлопчикам
            </a>
            <a
                href='https://www.google.com/search?q=%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8+%D0%B4%D0%BB%D1%8F+%D0%B4%D1%96%D0%B2%D1%87%D0%B0%D1%82%D0%BE%D0%BA&tbm=isch&ved=2ahUKEwiQ7I6czOjsAhUyiYsKHRlfBakQ2-cCegQIABAA&oq=%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8+%D0%B4%D0%BB%D1%8F+%D0%B4%D1%96%D0%B2%D1%87%D0%B0%D1%82%D0%BE%D0%BA&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEENQlocBWJKXAWC0mwFoAHAAeACAAZoBiAHTB5IBAzAuOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=8naiX5CrNrKSrgSZvpXICg&bih=737&biw=974&tbs=lr%3Alang_1uk'
                className={styles.third}
                target='_blank'
                rel='noopener noreferrer'
            >
                Дівчаткам
            </a>
            <a
                href='https://www.google.com/search?q=%D0%B4%D0%BE%D1%80%D0%BE%D1%81%D0%BB%D1%96+%D0%BA%D0%BE%D0%BC%D0%BF%27%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%96++%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8&tbm=isch&ved=2ahUKEwj5hsLVzOjsAhVPiYsKHcdGDb8Q2-cCegQIABAA&oq=%D0%B4%D0%BE%D1%80%D0%BE%D1%81%D0%BB%D1%96+%D0%BA%D0%BE%D0%BC%D0%BF%27%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%96++%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8&gs_lcp=CgNpbWcQAzoICAAQCBAHEB5Qn2VYwoYBYIeNAWgAcAB4AIABnAGIAaoMkgEEMC4xMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=a3eiX7mlEM-SrgTHjbX4Cw&bih=737&biw=974&tbs=lr%3Alang_1uk'
                className={styles.fourth}
                target='_blank'
                rel='noopener noreferrer'
            >
                Вік
            </a>
            <a
                href='https://www.google.com/search?q=%D0%B2%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D0%B2%D1%96+%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8&tbm=isch&ved=2ahUKEwi_0dLezOjsAhWGB3cKHVGZCgUQ2-cCegQIABAA&oq=%D0%B2%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D0%B2%D1%96+%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8&gs_lcp=CgNpbWcQAzICCAA6BggAEAcQHjoICAAQBxAFEB46CAgAEAgQBxAeUJ__CVjymgpgmKUKaAFwAHgAgAGlAogB0QySAQUwLjkuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=fneiX7-aGYaP3APRsqoo&bih=737&biw=974&tbs=lr%3Alang_1uk'
                className={styles.other}
                target='_blank'
                rel='noopener noreferrer'
            >
                . . .
            </a>

            <p className={styles.phone}>+38(063)104-22-44</p>
            <button className={styles.button}>Замовити дзвінок</button>

            <img src={Cart} className={styles.img} alt='Кошик' />
            <p className={styles.price}>1227 грн.</p>

            <img src={Button} className={styles.point} alt='склад кошику' />
        </div>
    );
};
