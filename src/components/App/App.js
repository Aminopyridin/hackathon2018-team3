import React from 'react';
import ChristmasTree from '../ChristmasTree/ChristmasTree';
import styles from './style.css';
import Balls from "../Balls/Balls";

export default class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <ChristmasTree/>
                    <Balls l={-95} t={-90} color={'yellow'}/>
                    <Balls l={-150} t={-70} color={'red'}/>
                </div>
            </div>
        );
    }
}