import React from 'react';
import style from './GetInTouch.module.scss'
import Form from "../../components/Form/Form";

const GetInTouch = () => {




    return (
        <div className={style.content}>
            <div className={style.texts}>
                <h2>Get In Touch</h2>

                <h4 style={{whiteSpace: "pre-line"}}>
                    Have questions about Noble or just want to&nbsp;say hello?
                    Drop&nbsp;us&nbsp;a&nbsp;line&nbsp;and&nbsp;a&nbsp;member of&nbsp;our&nbsp;team will get back to you shortly.
                </h4>
            </div>

            <Form/>


        </div>
    );
};

export default GetInTouch;