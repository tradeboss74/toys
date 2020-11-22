import React from 'react';
import styles from './styles.module.scss';
import Bear from '../../images/Bear.png';
import Bear3 from '../../images/Bear3.png';
import Cart from '../../images/Cart.png';
import Button from '../../images/Button.png';
import burger from '../../images/burger.png';

const ToyRange = [
    {
        Link:
            'https://www.google.com/search?q=%D0%B1%D1%80%D1%8F%D0%B7%D0%BA%D0%B0%D0%BB%D1%8C%D1%86%D1%8F&lr=lang_uk&newwindow=1&tbs=lr:lang_1uk&sxsrf=ALeKk02i_-BN6FSpiawAOFBE1Y2OYl_QSw:1604482133349&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi62uzcyejsAhVk_CoKHYp6AJkQ_AUoAXoECAUQAw&biw=974&bih=737',
        Dir: 'Малюкам',
    },
    {
        Link:
            'https://www.google.com/search?q=%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8+%D0%B4%D0%BB%D1%8F+%D1%85%D0%BB%D0%BE%D0%BF%D1%87%D0%B8%D0%BA%D1%96%D0%B2&tbm=isch&ved=2ahUKEwiB3dPeyejsAhVXwioKHbe2DSIQ2-cCegQIABAA&oq=%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8+%D0%B4%D0%BB%D1%8F+%D1%85%D0%BB%D0%BE%D0%BF%D1%87%D0%B8%D0%BA%D1%96%D0%B2&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BQgAELEDUIT4J1jIuShg5cgoaABwAHgAgAG7AYgBkBiSAQQwLjIxmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=WXSiX8HMB9eEqwG37baQAg&bih=737&biw=974&tbs=lr%3Alang_1uk',
        Dir: 'Хлопчикам',
    },
    {
        Link:
            'https://www.google.com/search?q=%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8+%D0%B4%D0%BB%D1%8F+%D0%B4%D1%96%D0%B2%D1%87%D0%B0%D1%82%D0%BE%D0%BA&tbm=isch&ved=2ahUKEwiQ7I6czOjsAhUyiYsKHRlfBakQ2-cCegQIABAA&oq=%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8+%D0%B4%D0%BB%D1%8F+%D0%B4%D1%96%D0%B2%D1%87%D0%B0%D1%82%D0%BE%D0%BA&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEENQlocBWJKXAWC0mwFoAHAAeACAAZoBiAHTB5IBAzAuOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=8naiX5CrNrKSrgSZvpXICg&bih=737&biw=974&tbs=lr%3Alang_1uk',
        Dir: 'Дівчаткам',
    },
    {
        Link:
            'https://www.google.com/search?q=%D0%B4%D0%BE%D1%80%D0%BE%D1%81%D0%BB%D1%96+%D0%BA%D0%BE%D0%BC%D0%BF%27%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%96++%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8&tbm=isch&ved=2ahUKEwj5hsLVzOjsAhVPiYsKHcdGDb8Q2-cCegQIABAA&oq=%D0%B4%D0%BE%D1%80%D0%BE%D1%81%D0%BB%D1%96+%D0%BA%D0%BE%D0%BC%D0%BF%27%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%96++%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8&gs_lcp=CgNpbWcQAzoICAAQCBAHEB5Qn2VYwoYBYIeNAWgAcAB4AIABnAGIAaoMkgEEMC4xMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=a3eiX7mlEM-SrgTHjbX4Cw&bih=737&biw=974&tbs=lr%3Alang_1uk',
        Dir: 'Вік',
    },
    {
        Link:
            'https://www.google.com/search?q=%D0%B2%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D0%B2%D1%96+%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8&tbm=isch&ved=2ahUKEwi_0dLezOjsAhWGB3cKHVGZCgUQ2-cCegQIABAA&oq=%D0%B2%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D0%B2%D1%96+%D1%96%D0%B3%D1%80%D0%B0%D1%88%D0%BA%D0%B8&gs_lcp=CgNpbWcQAzICCAA6BggAEAcQHjoICAAQBxAFEB46CAgAEAgQBxAeUJ__CVjymgpgmKUKaAFwAHgAgAGlAogB0QySAQUwLjkuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=fneiX7-aGYaP3APRsqoo&bih=737&biw=974&tbs=lr%3Alang_1uk',
        Dir: '. . .',
    },
];

export const HorisontalMenu = ({ type = 'header' }) => {
    return (
        <div
            className={`${styles.header} ${type === 'carousel' && styles.carouselStyle} ${
                type === 'footer' && styles.footer
            }`}
        >
            {type === 'header' ? <img src={Bear} className={styles.logo} alt='логотип' /> : null}
            {type === 'footer' && <img src={Bear3} className={styles.logo3} alt='логотип' />}

            <div className={`${styles.shopName} ${type === 'carousel' && styles.hide}`}>
                <p className={`${styles.name} ${type === 'footer' && styles.footer}`}>TOY SHOP</p>
                <p>Магазин Дитячих Іграшок</p>
            </div>
            {ToyRange.map(({ Link, Dir }) => (
                <a
                    href={Link}
                    className={`${styles.menu} ${type === 'footer' && styles.footer} ${
                        type === 'header' && styles.headerHide
                    }`}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={Math.random()}
                >
                    {Dir}
                </a>
            ))}
            <p className={`${styles.phone} ${type === 'carousel' && styles.hide}`}>
                +38(063)104-22-44
            </p>
            <button
                className={`${styles.button} ${type === 'carousel' && styles.hide} ${
                    type === 'footer' && styles.footer
                } ${type === 'header' && styles.headerHide}`}
            >
                Замовити дзвінок
            </button>

            <img
                src={Cart}
                className={`${styles.img} ${type === 'carousel' && styles.hide} ${
                    type === 'footer' && styles.hide
                }`}
                alt='Кошик'
            />
            <p
                className={`${styles.price} ${type === 'carousel' && styles.hide} ${
                    type === 'footer' && styles.hide
                }`}
            >
                1227 грн.
            </p>

            <img
                src={Button}
                className={`${styles.point} ${type === 'carousel' && styles.hide} ${
                    type === 'footer' && styles.hide
                }`}
                alt='склад кошику'
            />
            <img
                src={burger}
                className={`${type === 'carousel' && styles.hide} ${
                    type === 'footer' && styles.hide
                } ${type === 'header' && styles.burger}`}
            />
        </div>
    );
};
