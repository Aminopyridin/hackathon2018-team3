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
                    <Balls l={-95} t={-100}/>
                    <Balls l={-150} t={-60}/>
                    <Balls l={-125} t={-20}/>
                    <Balls l={-205} t={20}/>
                    <Balls l={-178} t={60}/>
                    <Balls l={-200} t={100}/>

                    <Balls l={-275} t={-110}/>
                    <Balls l={-320} t={-20}/>
                    <Balls l={-365} t={80}/>
                    <Balls l={-400} t={125}/>
                    <Balls l={-370} t={110}/>
                    <Balls l={-300} t={110}/>
                </div>
            </div>
        );
    }
}