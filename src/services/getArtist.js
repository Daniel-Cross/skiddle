import axios from "axios";

const getArtist = artistId => {
  if (!artistId) {
    return Promise.resolve([]);
  }

  return axios
    .get(
      `https://www.skiddle.com/api/v1/artist/${artistId}/?api_key=008f1e6099ecc48e990e3776784d447b&`
    )
    .then(response =>
      response.data && response.data.results ? response.data.results : {}
    )

    .catch(function(err) {
      console.error(err);
    });
};

export default getArtist;
