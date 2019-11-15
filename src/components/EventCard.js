import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const EventCard = props => {
  const { details } = props;

  return (
    <div className="EventCard">
      <img className="event-card-img" src={details.largeimageurl} alt="event" />
      <div className="event-details">
        <h3 className="event-name">{details.eventname}</h3>
        <p className="event-description">{details.description}</p>
        <h4 className="icons">
          <i className="far fa-calendar" />
          {details.venue.name}, {details.venue.town}
        </h4>
        <h4 className="icons">
          <i className="fas fa-map-marker-alt" />
          {moment(details.startdate).format("Do MMM YYYY")}
        </h4>

        <NavLink to={`/event/${details.id}`}>
          <button className="details-btn">view details</button>
        </NavLink>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  details: PropTypes.object.isRequired
};

export default EventCard;
