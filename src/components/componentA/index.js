import React from 'react'
import styles from './ComponentA.module.css'

console.log('Styles', styles)
export default function() {
    return <div className={styles.card}>
        <div className={styles.blueText}>Component A Styles</div>
    </div>
}