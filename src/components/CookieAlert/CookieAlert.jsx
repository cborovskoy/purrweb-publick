import React, {useState} from 'react';
import styles from './CookieAlert.module.scss'

const CookieAlert = () => {
    const [isShowAlert, setShowAlert] = useState(true)

    return (
        <div style={isShowAlert ? {} : {display: "none"}} className={styles.cookieAlert}>
            <div className={styles.content}>
                <p className={styles.text}>We use cookie to improve your experience on our site. By using our
                    site you consent cookies.</p>
                <button onClick={() => {
                    setShowAlert(false)
                }} className={styles.btn}>OK
                </button>
            </div>
        </div>
    );
};

export default CookieAlert;