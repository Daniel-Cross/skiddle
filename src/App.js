import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import getEvents from "./services/getEvents";

class App extends Component {
  state = {
    event: "",
    searchEvent: ""
  };

  handleChange = e => {
    this.setState({
      event: e.target.value
    });

    getEvents(this.state.event).then(data => {
      this.setState({ searchEvent: data });
    });
  };

  render() {
    const { event } = this.state;

    return (
      <div className="App">
        <SearchBar type="text" value={event} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
