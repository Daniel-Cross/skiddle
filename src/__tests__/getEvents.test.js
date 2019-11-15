import "../testSetup";
import getEvents from "../services/getEvents";
import axios from "axios";
import searchResultsMock from "./mocks/search-event-results.json";
jest.mock("axios");

axios.get.mockImplementation(() =>
  Promise.resolve({
    data: searchResultsMock
  })
);

describe("getEvents", () => {
  it("should return the correct endpoint based on mock data", done => {
    expect.assertions(2);
    expect(axios.get).not.toHaveBeenCalled();
    return getEvents("my search query").then(data => {
      expect(axios.get).toHaveBeenCalledWith(
        `https://www.skiddle.com/api/v1/events/search/?api_key=008f1e6099ecc48e990e3776784d447b&keyword=my search query`
      );
      done();
    });
  });
});
