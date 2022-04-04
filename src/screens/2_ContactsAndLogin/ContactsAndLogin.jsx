import React from 'react';
import styles from "./ContactsAndLogin.module.scss"

const ContactsAndLogin = () => {
    return (
        <div className={styles.contactsAndLogin}>
            <div className={styles.cardEmail}>
                <p>Would like to become a&nbsp;member, please contact&nbsp;us</p>
                <a href="mailto:support@notab.com">support@notab.com</a>
            </div>
            <div className={styles.cardEmail}>
                <p>Already a partner? </p>
                <a href="">Login</a>
            </div>

        </div>
    );
};

export default ContactsAndLogin;