import "../testSetup";
import getEvents from "../services/getEvents";
import axios from "axios";
jest.mock("axios");

axios.get.mockImplementation(() =>
  Promise.resolve({
    error: 0,
    totalcount: "16971",
    pagecount: 20,
    results: [
      {
        id: "13645730",
        EventCode: "CLUB",
        eventname: "Cirque Du Soul : Manchester // Romare",
        cancelled: "0",
        venue: {
          id: 1501,
          name: "Hidden",
          address: "DownTex Mill 16-18 Mary Street Manchester ",
          town: "Manchester",
          postcode_lookup: "Manchester",
          postcode: "M3 1DZ",
          country: "GB",
          phone: "",
          latitude: 53.490736,
          longitude: -2.249797,
          type: "Nightclub",
          rating: 4
        },
        imageurl:
          "https://d31fr2pwly4c4s.cloudfront.net/f/5/2/1218236_1_cirque-du-soul-manchester-romare_th.jpg",
        largeimageurl:
          "https://d31fr2pwly4c4s.cloudfront.net/f/5/2/1218236_1_cirque-du-soul-manchester-romare.jpg",
        link:
          "https://www.skiddle.com/whats-on/Manchester/Hidden/Cirque-Du-Soul--Manchester--Romare/13645730/",
        date: "2019-11-14",
        startdate: "2019-11-14T22:00:00+00:00",
        enddate: "2019-11-15T04:00:00+00:00",
        description:
          "The Greatest Show On Earth is back in Manchester for one night only!",
        openingtimes: {
          doorsopen: "22:00",
          doorsclose: "04:00",
          lastentry: ""
        },
        minage: "18",
        imgoing: null,
        goingtos: 0,
        goingtocount: "359",
        tickets: true,
        entryprice: "£8+",
        eventvisibility: "public",
        rep: {
          enabled: false
        }
      }
    ]
  })
);

describe("getEvents", () => {
  it("should return the correct endpoint based on mock data", done => {
    expect.assertions(2);
    expect(axios.get).not.toHaveBeenCalled();
    getEvents("my search query").then(data => {
      expect(axios.get).toHaveBeenCalledWith(
        `https://www.skiddle.com/api/v1/events/search/?api_key=008f1e6099ecc48e990e3776784d447b&keyword=my search query`
      );
      done();
    });
  });
});
