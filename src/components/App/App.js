import React from 'react';
import ChristmasTree from '../ChristmasTree/ChristmasTree';
import styles from './style.css';
//jhghh
export default class App extends React.Component {
    render () {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <ChristmasTree />
                </div>
            </div>
        );
    }
}