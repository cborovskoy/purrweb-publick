import React from 'react';
import phone_pic from "../../img/screen3__phone.png";
import styles from "./OurMission.module.scss"

const OurMission = () => {
    return (
        <div className={styles.phoneAndText}>
            <img className={styles.phone_pic} src={phone_pic} alt="phone_pic"/>
            <div className={styles.texts}>
                <h2>
                    Our mission and vision
                </h2>
                <h4>
                    While technology is our sweet spot, we’ve&nbsp;developed our vision alongside our&nbsp;customers to
                    ensure your everyday problems are solved through simplistic tools. And as your business grows,
                    we’ll&nbsp;grow right alongside with you.
                </h4>
            </div>


        </div>
    );
};

export default OurMission;