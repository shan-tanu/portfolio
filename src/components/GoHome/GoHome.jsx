import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import homeWhite from '../../assets/home_white.png';
import homeBlack from '../../assets/home_black.png';
import './GoHome.css';

class GoHome extends Component {
    navigateToHome = () => {
        const {history} = this.props;
        history.push("/")
    }

    render() {      
        const {location} = this.props;
        const whiteBtn = location.pathname==="/";
        return (
            <button  className={`go-home-btn ${whiteBtn ? "white-bg" : "gradient-bg"}`}
            onClick={this.navigateToHome}>
                <img
                className="home-icon"
               src={whiteBtn ? homeBlack : homeWhite}
                alt="HomeIcon"
                />
            </button>
        );
    }
}

export default withRouter(GoHome);