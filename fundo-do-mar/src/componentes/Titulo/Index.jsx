import React from 'react';
import styles from './Titulo.module.scss'

export default function Titulo(props) {
    return (
        <h1 className={styles.titulo}>{props.titulo}</h1>
    )
} 