import React from 'react';
import styles from './AdvantageCard.module.scss'

const AdvantageCard = (props) => {
    return (
        <div className={styles.card}>
            <p style={{whiteSpace: "pre-line"}}>
                {props.text.split("<br/>").join("\n")}
            </p>
        </div>
    );
};

export default AdvantageCard;