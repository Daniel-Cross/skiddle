import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import getEvents from "./services/getEvents";
import EventsPage from "./components/EventsPage";

class App extends Component {
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
      <div className="App">
        <SearchBar type="text" value={event} handleChange={this.handleChange} />
        <EventsPage searchResults={searchResults} />
      </div>
    );
  }
}

export default App;
