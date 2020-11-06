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

export const Catalog = () => {
    return (
        <div>
            <h1>Каталог товарів</h1>
            <div className={styles.container}>
                <div className={styles.div}>
                    <img className={styles.img} src={rabbit} alt='м"яка іграшка зайка' />
                    <h3>М'яка іграшка МОТЯ ЗАЙКА</h3>
                    <p className={styles.availability}>В наявності</p>
                    <p>217 грн</p>
                </div>
                <div className={styles.div}>
                    <img className={styles.img} src={robot} alt='іграшка "робот"' />
                    <h3>DIY ABS Plastic Transformers Bumblebee</h3>
                    <p className={styles.availability}>В наявності</p>
                    <p>792 грн</p>
                </div>
                <div className={styles.div}>
                    <img className={styles.img} src={bear2} alt='плюшевий Ведмедик' />
                    <h3>М'яка іграшка плюшевий Ведмедик</h3>
                    <p className={styles.availability}>В наявності</p>
                    <p>213 грн</p>
                </div>
                <div className={styles.div}>
                    <img className={styles.Ellipse15} src={Ellipse15} alt='еліпс' />
                    <img className={styles.img} src={blueRabbit} alt='іграшка "СТІЧ"' />
                    <h3>М'яка іграшка "СТИЧ"</h3>
                    <p className={styles.availability}>В наявності</p>
                    <p>311 грн</p>
                </div>
                <div className={styles.div}>
                    <img
                        className={styles.img}
                        src={softToy}
                        alt='іграшка, що говорить. Пташеня "Принц"'
                    />
                    <h3>друг що говорить TY PUFFIES Пташеня "PRINCE"</h3>
                    <p className={styles.availability}>В наявності</p>
                    <p>401 грн</p>
                </div>
                <div className={styles.div}>
                    <img className={styles.img} src={blueDog} alt='Інтерактивний собака Чіпі' />
                    <h3>WowWee. Інтерактивний собака Чіпі</h3>
                    <p className={styles.availability}>В наявності</p>
                    <p>1230 грн</p>
                </div>
                <div className={styles.div}>
                    <img className={styles.img} src={mouse} alt='М"яка іграшка - миша' />
                    <h3>М'яка іграшка миша Джентельмен</h3>
                    <p className={styles.availability}>В наявності</p>
                    <p>213 грн</p>
                </div>
                <div className={styles.div}>
                    <img className={styles.img} src={blueEars} alt='М"яка іграшка Хаскі' />
                    <h3>М'яка іграшка Хаскі</h3>
                    <p className={styles.availability}>В наявності</p>
                    <p>223 грн</p>
                </div>
            </div>
        </div>
    );
};
