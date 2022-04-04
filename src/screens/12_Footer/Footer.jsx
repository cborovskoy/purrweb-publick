import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.content}>
            <div className={styles.leftPart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="17" fill="none" viewBox="0 0 82 17">
                    <path fill="#fff"
                          d="M3.757.355l5.37 8.198V.355h4.24v15.467H9.612l-5.37-8.22v8.22H0V.355h3.757zM33.08 8.088c0 4.464-3.844 8.066-8.308 8.066-4.463 0-8.33-3.605-8.33-8.066 0-4.46 3.867-8.088 8.33-8.088 4.464 0 8.308 3.625 8.308 8.088zm-4.064 0a4.242 4.242 0 00-8.485 0c0 2.342 1.9 4.221 4.241 4.221 2.342 0 4.244-1.88 4.244-4.22zM48.548 3.932h-4.53V15.82h-4.222V3.932h-4.53V.355h13.28v3.577h.002zM59.797 13.082h-4.905l-.951 2.74h-4.706L55.07.355H59.6l5.857 15.467H60.75l-.954-2.74zm-1.26-3.58l-1.194-3.403-1.193 3.403h2.387zM81.01 11.227c0 2.696-1.79 4.595-5.876 4.595h-6.563V.355h6.319c3.337 0 5.124 1.703 5.124 4.264 0 .884-.354 2.164-1.435 2.96 1.79.707 2.431 2.232 2.431 3.648zm-8.22-7.295v2.122h2.122c.951 0 1.393-.464 1.393-1.06 0-.597-.442-1.062-1.393-1.062H72.79zm4.421 7.005c0-.729-.597-1.303-1.68-1.303h-2.74v2.606h2.74c1.083.003 1.68-.594 1.68-1.303z"/>
                </svg>
                <div className={styles.contacts}>
                    <p className={styles.contactUs}>Contact us:</p>
                    <a href="mailto:support@notab.com">support@notab.com </a>
                </div>
                <p className={styles.copyright}>© 2020 - NoTab®</p>
            </div>
            <div className={styles.rightPart}>
                <a href="">Terms to use</a>
                <a href="">Privacy policy</a>
            </div>
        </div>
    );
};

export default Footer;