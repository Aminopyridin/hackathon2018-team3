import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';

export default class Balls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: 'black'};
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({color: this.props.color})
    }

    render() {
        const {l, t} = this.props;
        return (<div className={`${styles.ball}`} style={{top: t, left: l, background: this.state.color}}
                     onClick={this.handleClick} />);
    }

}

Balls.propTypes = {
    l: PropTypes.number.isRequired,
    t: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};