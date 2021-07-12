import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/home_anime.gif";
import Modal from "../Modal/Modal";

class Home extends React.Component {
  state = { showModal: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showModal: true });
    }, 1400);
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="home-container">
        {this.state.showModal && <Modal close={this.closeModal} />}
        <div className="header-text">
          <h1>I am Shantanu M.G.</h1>
          <p>
            A passionate professional with great interpersonal and communication
            skills.
          </p>
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
          <img src={homeIcon} alt="Home Page Icon" className="home-anime" />
        </div>
      </div>
    );
  }
}

export default Home;
