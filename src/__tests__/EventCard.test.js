import React from "react";
import testSetup from "../testSetup";
import EventCard from "../components/EventCard";
import searchResultsMock from "./mocks/search-event-results.json";
import { shallow } from "enzyme";

describe("EventCard", () => {
  it("renders without crashing", () => {
    const testInput = shallow(
      <EventCard details={searchResultsMock.results[0]} />
    );
  });
});
