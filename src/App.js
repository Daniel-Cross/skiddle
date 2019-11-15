import React, { Component } from "react";
import SearchPage from "./pages/SearchPage";
import EventPage from "./pages/EventPage";
import ArtistPage from "./pages/ArtistPage";

class App extends Component {
  renderPage(params) {
    if (params.eventId) {
      return <EventPage id={params.eventId} />;
    } else if (params.artistId) {
      return <ArtistPage id={params.artistId} />;
    } else {
      return <SearchPage />;
    }
  }

  render() {
    return (
      <div className="App">{this.renderPage(this.props.match.params)}</div>
    );
  }
}

export default App;
