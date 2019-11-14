import React from "react";
import PropTypes from "prop-types";

const SearchBar = props => {
  const { value, type, handleChange } = props;
  return (
    <div className="SearchBar">
      <img
        className="skiddle-logo"
        src="https://s3-eu-west-1.amazonaws.com/skiddlecdn-general/assets/logo/png/skiddle-logo-white-landscape.png"
        alt="skiddle"
      />
      <input
        className="event-input"
        type={type}
        placeholder="search for events"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchBar;
