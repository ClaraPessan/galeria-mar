import React from 'react'
import styles from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({ tags, filtraFotos, setItens }) {
    return (
        <div className={styles.tags}>
            <h3>Selecione um animal:</h3>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return (
                        <li key={tag} onClick={() => {filtraFotos(tag)}}>
                            <button>
                                {tag}
                            </button>
                        </li>
                    );
                })}
                <li onClick={()=>setItens(fotos)}>
                    <button>
                        Todas
                    </button>
                </li>
            </ul>
        </div>
    )
}
