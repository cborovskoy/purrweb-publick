import React from 'react';
import styles from "./IDScanner.module.scss";
import phone1 from "../../img/screen4__phone1.png";
import phone2 from "../../img/screen4__phone2.png";

const IdScanner = () => {
    return (
        <div className={styles.phonesAndTexts}>
            <div className={styles.phones}>
                <img className={styles.phone} src={phone1} alt="phone1_pic"/>
                <img className={styles.phone} src={phone2} alt="phone2_pic"/>
            </div>
            <div className={styles.texts}>
                <h2>ID Scanner</h2>
                <h4>Scan, verify, and collect data on each person that walks through your door to humanize your data. You
                    also get a&nbsp;digital 86 list as well as a citywide ban list to keep your venue safe.</h4>
            </div>
        </div>
    );
};

export default IdScanner;