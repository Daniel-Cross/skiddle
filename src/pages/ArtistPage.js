import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getArtist from "../services/getArtist";

class ArtistPage extends Component {
  state = {
    details: {}
  };

  async componentDidMount() {
    let details = {};
    try {
      details = await getArtist(this.props.id);
    } catch (err) {
      console.error(err);
    }
    this.setState({
      details
    });
  }

  render() {
    console.log(this.state.details);

    const { details } = this.state;
    return (
      <div className="EventPage">
        <Link to={"/"}>
          <p className="back-btn">go back</p>
        </Link>
        <div className="event">
          <div className="event-header">
            <h2 className="event-name">{details.name}</h2>
            <img className="artist-img" src={details.imageurl} alt="artist" />
          </div>
          <h4 className="artist-description">{details.description}</h4>
        </div>
      </div>
    );
  }
}

ArtistPage.propTypes = {
  details: PropTypes.object.isRequired
};

export default ArtistPage;
