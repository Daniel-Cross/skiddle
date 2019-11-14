import React, { Component } from "react";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    event: ""
  };

  handleChange = e => {
    this.setState({
      event: e.target.value
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
