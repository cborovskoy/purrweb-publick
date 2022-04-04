import React from 'react';
import styles from './EasierOrdering.module.scss'
import phone from "../../img/screen8__phone.png";
import AdvantageCard from "../../components/AdvantageCard/AdvantageCard";

const EasierOrdering = () => {
    return (
        <div className={styles.content}>
            <div className={styles.textsArea}>
                <div className={styles.texts}>
                    <h2>Easier ordering. Happier guests.</h2>
                    <h4>NoTab makes it simple for patrons to easily</h4>
                </div>
            </div>
            <div className={styles.phoneArea}>
                <img className={styles.phone} src={phone} alt="phone_pic"/>
            </div>

            <div className={styles.cardsArea}>
                <div className={styles.card1}>
                    <AdvantageCard text={"No more lost or<br/>forgotten credit cards"}/>
                </div>
                <div className={styles.card2}>
                    <AdvantageCard text={"No more lost or<br/>forgotten credit cards"}/>
                </div>

                <div className={styles.card3}>
                    <AdvantageCard text={"No more split<br/>your tab"}/>
                </div>

                <div className={styles.card4}>
                    <AdvantageCard text={"Skip the line"}/>
                </div>

            </div>
        </div>
    );
};

export default EasierOrdering;