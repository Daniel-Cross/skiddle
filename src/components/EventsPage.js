import React from "react";
import EventCard from "./EventCard";
import PropTypes from "prop-types";

const EventsPage = props => {
  const { searchResults } = props;
  return (
    <div className="EventsPage">
      {searchResults && searchResults.length > 0
        ? searchResults.map(singleEvent => <EventCard details={singleEvent} />)
        : ""}
    </div>
  );
};

EventsPage.propTypes = {
  searchResults: PropTypes.array.isRequired
};

export default EventsPage;
