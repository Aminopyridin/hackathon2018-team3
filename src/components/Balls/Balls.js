import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';

export default class Balls extends React.Component {
    static GetColor() {
        let colors = { 0:'darkred',
            1:'darkblue',
            2:'purple',
            3:'darkorange',
            4:'darkcyan'};
        let rand = Math.random()*5;
        rand = Math.floor(rand);
        return colors[rand];
    }

    static GetGradientByColor(color) {
        let gradients = {
            darkred: 'radial-gradient(red, orangered, white)',
            darkblue: 'radial-gradient(blue, dodgerblue, white)',
            purple: 'radial-gradient(mediumpurple, rebeccapurple, white)',
            darkorange: 'radial-gradient(orange, yellow, white)',
            darkcyan: 'radial-gradient(cyan, lightcyan, white)'};
        return gradients[color];
    }

    constructor(props){
        super(props);
        let baseColor = Balls.GetColor();
        this.state={
            color: baseColor
        };
    }

    render() {
        const {l, t, color} = this.props;
        return (<div className={`${styles.ball}`} style={{top: t, left: l, background: this.state.color}}
                     onClick={() => { this.setState({ color: Balls.GetGradientByColor(this.state.color) });}}/>);
    }
}

Balls.propTypes={
    l: PropTypes.number.isRequired,
    t: PropTypes.number.isRequired,
};
