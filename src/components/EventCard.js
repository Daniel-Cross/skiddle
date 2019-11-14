import React from "react";

const EventCard = props => {
  return (
    <div className="EventsPage">
      <div className="EventCard">
        <img
          className="event-img"
          src="https://d31fr2pwly4c4s.cloudfront.net/f/5/2/1218236_1_cirque-du-soul-manchester-romare.jpg"
          alt="event"
        />
        <div className="event-details">
          <h3 className="event-name">event name</h3>
          <p>
            Event description goes here. Not too long but not too short either
          </p>
          <h4>
            <i className="far fa-calendar" />
            Event Location
          </h4>
          <h4>
            <i className="fas fa-map-marker-alt" />
            Event Date
          </h4>
          <button className="details-btn">view details</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
