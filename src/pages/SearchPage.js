import React, { Component } from "react";
import getEvents from "../services/getEvents";
import EventCard from "../components/EventCard";

class SearchPage extends Component {
  state = {
    event: "",
    searchResults: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.event !== this.state.event) {
      getEvents(this.state.event).then(data => {
        this.setState({ searchResults: data });
      });
    }
  }

  handleChange = e => {
    this.setState({
      event: e.target.value
    });
  };

  render() {
    const { event, searchResults } = this.state;
    return (
      <div className="SearchBar">
        <img
          className="skiddle-logo"
          src="https://s3-eu-west-1.amazonaws.com/skiddlecdn-general/assets/logo/png/skiddle-logo-white-landscape.png"
          alt="skiddle"
        />
        <input
          className="event-input"
          type="text"
          placeholder="search for events"
          value={event}
          onChange={this.handleChange}
        />
        <div className="EventsPage">
          {searchResults && searchResults.length > 0
            ? searchResults.map(singleEvent => (
                <EventCard details={singleEvent} />
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default SearchPage;
