import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';

export default class Balls extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {l, t} = this.props;
        return (<div className={`${styles.ball}`} style={{top: `${l}`, left: `${t}`}}/>);
    }
}

Balls.propTypes={
    l: PropTypes.number.isRequired,
    t: PropTypes.number.isRequired
};