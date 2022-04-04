import React from 'react';
import styles from './Notab.module.scss'
import phone from "../../img/screen9__phone.png";

const Notab = () => {
    return (
        <div className={styles.content}>
            <img className={styles.phone} src={phone} alt="phone_pic"/>
            <div className={styles.test}></div>

        </div>
    );
};

export default Notab;