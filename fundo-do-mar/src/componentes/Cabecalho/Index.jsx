import React from "react";
import Titulo from "../Titulo/Index";
import styles from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={styles.header}>
            <Titulo titulo="Fundo do mar"/>
        </header>
    )
}