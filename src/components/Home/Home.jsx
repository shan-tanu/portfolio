import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import homeIcon from '../../assets/home_anime.gif';

class Home extends React.Component{
    render() {
        return(
            <div className="home-container">
                <div className="header-text">
                    <h1>Welcome to my Portfolio!!</h1>
                    <p>This is Shantanu M.G. <br/><br/>A tech entusiast and a developer exploring and building Web Apps.</p>
                </div>
                <div className="head-btns">
                    <Link to="/about" className="btn btn-white">
                        <p className="btn-text">Know more about me.</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Connect with me.</p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img
                    src={homeIcon}
                    alt="Home Page Icon"
                    className="home-anime"
                    />
                </div>
            </div>
        );
    }

}

export default Home;