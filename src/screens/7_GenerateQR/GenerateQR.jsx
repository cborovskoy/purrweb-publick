import React from 'react';
import styles from './GenerateQR.module.scss'
import phone from "../../img/screen7_phone.png";

const GenerateQR = () => {
    return (
        <div className={styles.textsAndPhone}>
            <img className={styles.phone} src={phone} alt="phone_pic"/>
            <div className={styles.arrow}>
                <p className={styles.arrowСaption}>Scan QR-code</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="70" fill="none" viewBox="0 0 81 70">
                    <path fill="#fff" d="M.632 4.084a.5.5 0 01.06-.705L4.13.477a.5.5 0 01.645.764l-3.057 2.58 2.58 3.057a.5.5 0 01-.765.645L.632 4.083zm78.887 65.24C78.03 58.655 73.064 43.633 61.146 30.66 49.238 17.7 30.358 6.75.972 4.26l.084-.996c29.615 2.51 48.735 13.56 60.826 26.722C73.966 43.136 79 58.36 80.51 69.185l-.99.139z"/>
                </svg>

            </div>
            <div className={styles.texts}>
                <h2>Generate your QR-code</h2>
                <h4>The guest QR code is scanned by the staff and automatically sent</h4>
            </div>

        </div>
    );
};

export default GenerateQR;