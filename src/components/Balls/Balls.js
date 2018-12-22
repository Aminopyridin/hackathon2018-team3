import React from 'react';
import styles from './style.css';

export default class Balls extends React.Component {
    render () {
        return (
            <div className={styles.balls}>
                <div className={`${styles.ball}`} />
                <div className={`${styles.ball} ${styles.first}`} />
                <div className={`${styles.ball} ${styles.second}`} />
                <div className={`${styles.ball} ${styles.third}`} />
            </div>
        );
    }
}