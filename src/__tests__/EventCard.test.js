import React from "react";
import ReactDOM from "react-dom";
import EventCard from "../components/EventCard";

describe("EventCard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EventCard details={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
