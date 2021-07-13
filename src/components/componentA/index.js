import React from 'react'
import styles from './ComponentA.module.css'

import webpacklogo from '../../images/webpack.png'
const logoCss = {
    height: 200,
    width: 300
}
export default function() {
    return <div className={styles.card}>
        <h1>CRA FREE</h1>
        <img src={webpacklogo} alt="webpack" style={logoCss}/>
    </div>
}