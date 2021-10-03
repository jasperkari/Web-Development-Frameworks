import React from 'react'
import styles from './Headers.module.css';

export default function Headers() {
    return (
        <div className = {styles.HeaderBackground}>
            <div className = {styles.container}>
                <div className = {styles.brand}>HELSINGING SANOMAT</div>
                <div>Uutiset</div>
                <div>Lehdet</div>
                <div>Tilaa</div>
                <div>Kirjaudu</div>
                <div>Hae</div>
                <div>Valikko</div>
            </div>
        </div>
    )
}
