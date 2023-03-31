import React from "react";
import banner from './banner.jpg'
import styles from './Banner.module.scss'
import Titulo from "../Titulo/Index";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Titulo titulo="os maiores animais marinhos do mundo!"/>
            <img src={banner} alt="banner animais marinhos" className={styles.banner__foto}/>
        </div>
    )
}