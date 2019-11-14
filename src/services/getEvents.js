import axios from "axios";

const getEvents = query => {
  if (!query) {
    return Promise.resolve([]);
  }

  return axios
    .get(
      `https://www.skiddle.com/api/v1/events/search/?api_key=008f1e6099ecc48e990e3776784d447b&keyword=${query}`
    )
    .then(function(response) {
      return response.data.results.map(events => events);
    })
    .catch(function(err) {
      console.error(err);
    });
};

export default getEvents;
