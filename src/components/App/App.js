import React from 'react';
import ChristmasTree from '../ChristmasTree/ChristmasTree';
import styles from './style.css';
import Balls from "../Balls/Balls";
//jhghh
export default class App extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.treeWrapper}>
                    <ChristmasTree/>
                    <Balls id={1} l={-95} t={-90} color={'red'}/>
                    <Balls id={2} l={-150} t={-70} color={'yellow'}/>
                </div>
            </div>
        );
    }
}