import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getEvent from "../services/getEvent";
import moment from "moment";
import { NavLink } from "react-router-dom";

class EventPage extends Component {
  state = {
    details: {}
  };

  async componentDidMount() {
    let details = {};
    try {
      details = await getEvent(this.props.id);
    } catch (err) {
      console.error(err);
    }
    this.setState({
      details
    });
  }

  render() {
    const { details } = this.state;

    return details && details.venue ? (
      <div className="EventPage">
        <Link to={"/"}>
          <p className="back-btn">go back</p>
        </Link>
        <div className="event">
          <div className="event-header">
            <h2 className="event-name">{details.eventname}</h2>
            <img className="event-img" src={details.imageurl} alt="artist" />
          </div>
          <h4>
            {details.venue.name} in {details.venue.cityname}
          </h4>
          <h4>{moment(details.startdate).format("Do MMM YYYY")}</h4>
          <h4>
            {moment(details.startdate).format("LT")} till{" "}
            {moment(details.enddate).format("LT")}
          </h4>
          <h4>Minimum age: {details.MinAge}</h4>
          <p>{details.description}</p>
          <div className="artists-images">
            {details.artists
              ? details.artists.map(artist => (
                  <NavLink to={`/artist/${artist.artistid}`}>
                    <div className="artists">
                      <img
                        className="artist-img"
                        src={artist.image}
                        alt={artist.artistid}
                      />
                      <p className="artist-name">{artist.name}</p>
                    </div>
                  </NavLink>
                ))
              : ""}
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

EventPage.propTypes = {
  details: PropTypes.object.isRequired
};

export default EventPage;
